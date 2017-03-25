import {Component, OnInit} from "@angular/core";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {JournalService} from "../../services/journal.service";
import {JournalModel} from "../../models/journal.model";
import {LayerModel} from "../../models/layer.model";
import {Constrains} from "../../constraints";
import {go} from "@ngrx/router-store";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-journal-builder',
  templateUrl: './journal-builder.component.html',
  styleUrls: ['./journal-builder.component.css'],
  providers: [JournalService]
})
export class JournalBuilderComponent implements OnInit {

  private journal: JournalModel;
  private layer: LayerModel;
  private layerHistory: LayerModel[];
  private errorMessage: string;
  private isNamed: boolean;

  constructor(private journalService: JournalService,
              private location: Location,
              private router: Router,
              private store: Store<AppState>) {
    this.journal = new JournalModel();
    this.layer = new LayerModel();
    this.layerHistory = [];
    this.isNamed = false;
  }

  ngOnInit() {
    this.store.dispatch(go([Constrains.createJournalPage]));

    this.journal.layer = new LayerModel();
    this.layerHistory.push(this.journal.layer);
  }

  private addLayer() {

    let layer = this.layerHistory.slice(-1)[0];

    if (isNullOrUndefined(this.journal.layer)) {
      this.journal.layer = new LayerModel();
    }

    if ((!isNullOrUndefined(this.layer.layerName) || this.layer.layerName != "") &&
      (!isNullOrUndefined(this.layer.layerType) || this.layer.layerType != "")) {
      if (isNullOrUndefined(layer.layers)) {
        layer.layers = [];
      }
      this.layer.layers = [];
      layer.layers.push(this.layer);
      this.layer = new LayerModel();
    }
  }

  private selectLayer(layer: LayerModel) {
    this.layerHistory.push(layer);
  }

  private goUp() {
    if (this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory)) {
      if (!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private saveJournal() {

    this.journalService.createJournal(this.journal)
      .subscribe(
        journal => {
          this.journal = journal;
          this.gotoViewJournal(this.journal.id);
        },
        error => this.errorMessage = <any>error
      );
  }

  private enterName() {
    if (this.journal.journalName != null &&
      this.journal.journalName != "") {
      this.isNamed = true;
    }
  }

  private edit() {
    this.isNamed = false;
  }

  private gotoViewJournal(id: number): void {
    let link = [Constrains.viewJournalPage, id];
    this.router.navigate(link);
  }

  goBack(): void {
    this.location.back();
  }

}
