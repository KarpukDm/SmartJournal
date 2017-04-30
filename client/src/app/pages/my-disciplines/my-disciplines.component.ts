import {Component, OnInit} from "@angular/core";
import {isNullOrUndefined} from "util";
import {LayerModel} from "../../models/layer.model";
import {DisciplineModel, DisciplineTypeModel} from "../../models/discipline.model";
import {JournalModel} from "../../models/journal.model";
import {JournalService} from "../../services/journal.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {go} from "@ngrx/router-store";
import {Constrains} from "../../constraints";
import {DisciplineService} from "../../services/discipline.service";

@Component({
  selector: 'app-my-disciplines',
  templateUrl: './my-disciplines.component.html',
  styleUrls: ['./my-disciplines.component.css']
})
export class MyDisciplinesComponent implements OnInit {

  private discipline: DisciplineModel;
  private disciplineTypes: DisciplineTypeModel[];
  private errorMessage: string;
  private journals: JournalModel[];
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;
  private journal: JournalModel;
  private isSelected: boolean;
  private disciplines: DisciplineModel[];

  constructor(private journalService: JournalService,
              private disciplineService: DisciplineService,
              private store: Store<AppState>) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
    this.disciplineTypes = [];
    this.store.dispatch(go([Constrains.myDisciplinesPage]));
  }

  ngOnInit() {
    this.discipline = new DisciplineModel();
    this.disciplineTypes.push(new DisciplineTypeModel());

    this.journalService.getMyTemplates()
      .subscribe(
        templates => {
          this.journals = templates;
          console.log(this.journals);
        },
        error => this.errorMessage = <any>error
      );

    this.disciplineService.getMyDisciplines()
      .subscribe(
        disciplines => {
          this.disciplines = disciplines;
          console.log(this.disciplines);
        },
        error => this.errorMessage = <any>error
      );
  }

  addDisciplineType() {
    this.disciplineTypes.push(new DisciplineTypeModel());
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if (!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private selectLayer(layer: LayerModel) {
    if (layer.layers.length != 0) {
      if (!isNullOrUndefined(layer.layers)) {
        this.layerHistory.push(layer);
        this.isLastLevel = layer.layers.length == 0;
        if (this.isLastLevel == true) {
        }
      }
    }
  }

  private selectJournal(template: JournalModel) {
    this.journal = template;
    console.log(template);
    this.layerHistory.push(this.journal.layer);
    this.isSelected = true;
  }

  private selectDiscipline(discipline: DisciplineModel) {
    this.discipline = discipline;
  }

  private goUp() {
    if (this.layerHistory.length > 1) {
      this.layerHistory.pop();
    } else {
      this.isSelected = false;
    }
    this.isLastLevel = false;
  }

}
