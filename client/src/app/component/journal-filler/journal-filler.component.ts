import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {JournalService} from "../../service/journal.service";
import {isNullOrUndefined} from "util";
import {Constrains} from "../../constraints";
import {StudentModel} from "../../model/student.model";
import {JournalModel} from "../../model/journal.model";
import {LayerModel} from "../../model/layer.model";

@Component({
  selector: 'app-journal-filler',
  templateUrl: './journal-filler.component.html',
  styleUrls: ['./journal-filler.component.css'],
  providers: [JournalService]
})
export class JournalFillerComponent implements OnInit {

  private errorMessage: string;
  private journal: JournalModel;
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;
  private student: StudentModel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.student = new StudentModel();
  }

  ngOnInit() {
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

  private addStudent(){
    let layer = this.layerHistory.slice(-1)[0];
    layer.students.push(this.student);
    this.student = new StudentModel();
  }

  private getStudents(){
    let layer = this.layerHistory.slice(-1)[0];
    return layer.students;
  }

  private selectLayer(layer: LayerModel) {
    if(!isNullOrUndefined(layer.layers)) {
      if(layer.layers.length == 0){
        this.isLastLevel = true;
        if(isNullOrUndefined(layer.students)) {
          layer.students = [];
        }
      }else{
        this.isLastLevel = false;
      }
      this.layerHistory.push(layer);
    }
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
    this.isLastLevel = false;
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private saveJournal(){
    console.log(this.journal);
    this.journalService.saveJournal(this.journal)
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

}
