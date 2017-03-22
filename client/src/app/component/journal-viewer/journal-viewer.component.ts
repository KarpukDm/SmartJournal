import {Component, OnInit} from "@angular/core";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {JournalService} from "../../service/journal.service";
import {isNullOrUndefined} from "util";
import {Constrains} from "../../constraints";
import {JournalModel} from "../../model/journal.model";
import {LayerModel} from "../../model/layer.model";

@Component({
  selector: 'app-journal-viewer',
  templateUrl: './journal-viewer.component.html',
  styleUrls: ['./journal-viewer.component.css'],
  providers: [JournalService]
})
export class JournalViewerComponent implements OnInit {

  private errorMessage: string;
  private journal: JournalModel;
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService) {
    this.layerHistory = [];
    this.isLastLevel = false;
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

  private selectLayer(layer: LayerModel) {
    if(!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
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

  private getStudents(){
    let layer = this.layerHistory.slice(-1)[0];
    return layer.students;
  }

  private gotoEditJournal(): void {
    let link = [Constrains.editJournalPage, this.journal.id];
    this.router.navigate(link);
  }

  private gotoFillJournal(): void {
    let link = [Constrains.fillJournalPage, this.journal.id];
    this.router.navigate(link);
  }

}
