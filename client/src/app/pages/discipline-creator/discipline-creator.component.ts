import {Component, OnInit} from '@angular/core';
import {DisciplineModel, DisciplineTypeModel} from "../../models/discipline.model";
import {JournalModel} from "../../models/journal.model";
import {LayerModel} from "../../models/layer.model";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {JournalService} from "../../services/journal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Constrains} from "../../constraints";
import {go} from "@ngrx/router-store";
import {isNullOrUndefined} from "util";
import {DisciplineService} from "../../services/discipline.service";

@Component({
  selector: 'app-discipline-creator',
  templateUrl: './discipline-creator.component.html',
  styleUrls: ['./discipline-creator.component.css']
})
export class DisciplineCreatorComponent implements OnInit {

  private discipline: DisciplineModel;
  private disciplineTypes: DisciplineTypeModel[];

  constructor(private disciplineService: DisciplineService) {
  }

  ngOnInit() {
    this.discipline = new DisciplineModel();
    this.disciplineTypes = [];
    this.discipline.disciplineTypes = [];
    this.disciplineTypes.push(new DisciplineTypeModel());
  }

  addDisciplineType() {
    this.disciplineTypes.push(new DisciplineTypeModel());
  }

  save(){
    this.discipline.disciplineTypes = this.disciplineTypes;
    console.log(this.discipline);
    this.disciplineService.saveJournal(this.discipline)
      .subscribe(x => {

      });
  }

}
