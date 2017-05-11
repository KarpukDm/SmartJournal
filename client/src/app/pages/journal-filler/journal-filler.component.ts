import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {JournalService} from "../../services/journal.service";
import {JournalModel} from "../../models/journal.model";
import {LayerModel} from "../../models/layer.model";
import {StudentModel} from "../../models/student.model";
import {Constrains} from "../../constraints";
import {Store} from "@ngrx/store";
import {go} from "@ngrx/router-store";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-journal-filler',
  templateUrl: './journal-filler.component.html',
  styleUrls: ['./journal-filler.component.css']
})
export class JournalFillerComponent implements OnInit {

  private errorMessage: string;
  private journal: JournalModel;
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;
  private student: StudentModel;
  private attachmentFile: File;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService,
              private store: Store<AppState>) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.student = new StudentModel();
  }

  ngOnInit() {
    this.store.dispatch(go([Constrains.fillJournalPage]));
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.journalService.getJournalById(id)
        .subscribe(
          journal => {
            this.journal = journal;
            console.log(this.journal);
            this.layerHistory.push(this.journal.layer);
          },
          error => this.errorMessage = <any>error
        );
    });

  }

  private addStudent() {
    let layer = this.layerHistory.slice(-1)[0];
    layer.students.push(this.student);
    this.student = new StudentModel();
  }

  private pushStudent(student: StudentModel) {
    let layer = this.layerHistory.slice(-1)[0];
    layer.students.push(student);
  }

  private getStudents() {
    let layer = this.layerHistory.slice(-1)[0];
    return layer.students;
  }

  private selectLayer(layer: LayerModel) {
    if (!isNullOrUndefined(layer.layers)) {
      if (layer.layers.length == 0) {
        this.isLastLevel = true;
        if (isNullOrUndefined(layer.students)) {
          layer.students = [];
        }
      } else {
        this.isLastLevel = false;
      }
      this.layerHistory.push(layer);
    }
  }

  private goUp() {
    if (this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
    this.isLastLevel = false;
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if (!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private saveJournal() {
    console.log(this.journal);
    this.journalService.updateJournal(this.journal)
      .subscribe(
        journal => {
          this.journal = journal;
          console.log(journal);
          console.log(this.journal.id);
          console.log(this.journal.journalName);
          this.gotoViewJournal(this.journal.id);
        },
        error => this.errorMessage = <any>error
      );
  }

  private gotoViewJournal(id: number): void {
    console.log(id);
    let link = [Constrains.viewJournalPage, id];
    this.router.navigate(link);
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.attachmentFile = fileList[0];
    }

    console.log('Inside onSubmit2 :: AppComponent ');
    // this.shared_service.share(value);

    let file: File = this.attachmentFile;
    let formData: FormData = new FormData();
    formData.append('uploadfiles', file, file.name);

    this.journalService.uploadFile(formData)
      .subscribe(
        response => {
          const students: StudentModel[] = response;
          if(students != null) {
            for(let i of students) {
              this.pushStudent(i);
            }
          }
        },
        error => {
          console.log("ERROR :: register :: StudentRegisterComponent");
          console.log(error);
        }
      );
  }

}
