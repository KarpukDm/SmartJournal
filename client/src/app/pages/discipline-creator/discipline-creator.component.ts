import {Component, OnInit} from "@angular/core";
import {DisciplineModel, DisciplineTypeModel} from "../../models/discipline.model";
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

  save() {
    this.discipline.disciplineTypes = this.disciplineTypes;
    console.log(this.discipline);
    this.disciplineService.saveJournal(this.discipline)
      .subscribe(() => {
        this.discipline = new DisciplineModel();
        this.disciplineTypes = [];
        this.addDisciplineType();
      });
  }

}
