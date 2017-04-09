import {Component, OnInit} from "@angular/core";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {JournalService} from "../../services/journal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JournalModel} from "../../models/journal.model";
import {isNullOrUndefined} from "util";
import {LayerModel} from "../../models/layer.model";
import {Constrains} from "../../constraints";
import {go} from "@ngrx/router-store";

@Component({
  selector: 'app-my-templates',
  templateUrl: './my-templates.component.html',
  styleUrls: ['./my-templates.component.css']
})
export class MyTemplatesComponent implements OnInit {

  private errorMessage: string;
  private journals: JournalModel[];
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;
  private journal: JournalModel;
  private isSelected: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService,
              private store: Store<AppState>) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
  }

  ngOnInit() {

    this.store.dispatch(go([Constrains.myJournalsPage]));

    this.journalService.getMyTemplates()
      .subscribe(
        templates => {
          this.journals = templates;
          console.log(this.journals);
        },
        error => this.errorMessage = <any>error
      );
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private selectLayer(layer: LayerModel) {
    if(!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
      if(this.isLastLevel == true){
      }
    }
  }

  private selectJournal(template: JournalModel){
    this.journal = template;
    console.log(template);
    this.layerHistory.push(this.journal.layer);
    this.isSelected = true;
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }else{
      this.isSelected = false;
    }
    this.isLastLevel = false;
  }

}
