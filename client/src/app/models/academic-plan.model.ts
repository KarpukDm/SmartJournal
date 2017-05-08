import {DisciplineModel} from "./discipline.model";
import {LayerModel} from "./layer.model";
import {LessonModel} from "./lesson.model";

export class AcademicPlanModel {

  id: number;

  discipline: DisciplineModel;

  layer: LayerModel;

  lessons: LessonModel[];

  currentLayerId: number;

  constructor() {
    this.discipline = new DisciplineModel();
    this.layer = new LayerModel();
    this.lessons = [];
  }

}
