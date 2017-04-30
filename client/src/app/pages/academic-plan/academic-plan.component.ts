import {Component, OnInit} from '@angular/core';
import {AcademicPlanModel} from "../../models/academic-plan.model";
import {JournalService} from "../../services/journal.service";
import {DisciplineService} from "../../services/discipline.service";
import {DisciplineModel} from "../../models/discipline.model";
import {Constrains} from "../../constraints";
import {go} from "@ngrx/router-store";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {isNullOrUndefined} from "util";
import {LayerModel} from "../../models/layer.model";
import {JournalModel} from "../../models/journal.model";
import {LessonModel} from "../../models/lesson.model";
import {AcademicPlanService} from "../../services/academic-plan.service";

@Component({
  selector: 'academic-plan',
  templateUrl: './academic-plan.component.html',
  styleUrls: ['./academic-plan.component.css']
})
export class AcademicPlanComponent implements OnInit {

  private academicPlan: AcademicPlanModel;

  private discipline: DisciplineModel;
  private disciplines: DisciplineModel[];
  private errorMessage: string;
  private journals: JournalModel[];
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;
  private journal: JournalModel;
  private isSelected: boolean;
  private selectedLayer: LayerModel;

  private isSelectDiscipline: boolean;
  private isSelectLayer: boolean;

  private lessons: LessonModel[];
  private lesson: LessonModel;

  private lessonForEdit: LessonModel;

  constructor(private academicPlanService: AcademicPlanService,
              private journalService: JournalService,
              private disciplineService: DisciplineService,
              private store: Store<AppState>) {
    this.academicPlan = new AcademicPlanModel();
    this.disciplines = [];
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
    this.selectedLayer = new LayerModel();
    this.isSelectDiscipline = false;
    this.isSelectLayer = false;
    this.lessons = [];
    this.lesson = new LessonModel();

    this.store.dispatch(go([Constrains.createAcademicPlanPage]));
  }

  ngOnInit() {

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

  addLessonPlan() {
    if (!isNullOrUndefined(this.lesson["date"]) && this.lesson["date"] !== ""
      && !isNullOrUndefined(this.lesson["theme"]) && this.lesson["theme"] !== ""
      && !isNullOrUndefined(this.lesson["description"]) && this.lesson["description"] !== "") {
      this.lessons.push(this.lesson);
      this.lesson = new LessonModel();
    }
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if (!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private selectLayer(layer: LayerModel) {
    this.selectedLayer = layer;
    this.isSelectLayer = true;
    if (layer.layers.length != 0) {
      this.isSelectLayer = false;
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
      if (this.isLastLevel == true) {
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
    this.isSelectDiscipline = true;
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

  private getLessons() {
    this.lessons.push(new LessonModel());
    console.log("!");
    return this.lessons;
  }

  selectLessonType(type: string) {
    this.lesson.lessonType = type;
  }

  saveLesson() {
    this.lessonForEdit = null;
  }

  more(lesson: LessonModel) {
    this.lessonForEdit = lesson;
  }

  save() {
    this.academicPlan.lessons = this.lessons;
    this.academicPlan.layer = this.selectedLayer;
    this.academicPlan.discipline = this.discipline;

    this.academicPlanService.saveAcademicPlan(this.academicPlan)
      .subscribe(x => {
        console.log(x);
        this.academicPlan = new AcademicPlanModel();
        this.lessons = [];
        this.lesson = new LessonModel();
        this.discipline = new DisciplineModel();
        this.selectedLayer = new LayerModel();
      })
  }

}
