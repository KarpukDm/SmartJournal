import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {JournalService} from "../../services/journal.service";
import {JournalModel} from "../../models/journal.model";
import {LayerModel} from "../../models/layer.model";
import {Constrains} from "../../constraints";
import {go} from "@ngrx/router-store";
import {Store} from "@ngrx/store";
import {AppState} from "app/app.state";

@Component({
  selector: 'app-journal-editor',
  templateUrl: './journal-editor.component.html',
  styleUrls: ['./journal-editor.component.css']
})
export class JournalEditorComponent implements OnInit {

  private errorMessage: string;
  private journal: JournalModel;
  private layerHistory: LayerModel[];
  private isEdit: boolean;
  private editedLayer: LayerModel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService,
              private store: Store<AppState>) {
    this.layerHistory = [];
    this.journal = new JournalModel();
    this.isEdit = false;
    this.editedLayer = new LayerModel();
  }

  ngOnInit() {
    this.store.dispatch(go([Constrains.editJournalPage]));
    console.log(this.journal);
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
    }
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private edit(layer: LayerModel){
    this.isEdit = true;
    this.editedLayer = layer;
  }

  private saveJournal(){

    this.journalService.createJournal(this.journal)
      .subscribe(
        journal => {
          this.journal = journal;
          console.log(this.journal);
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
