import {DisciplineModel} from "./discipline.model";
import {LessonModel} from "./lesson.model";

export class StatisticsModel {

  id: number;

  discipline: DisciplineModel;

  date: string;

  status: StatusModel;

  lessonType: string;

  journalId: number;

  constructor(){
    this.discipline = new DisciplineModel();
    this.status = new StatusModel();
    let date = new Date();
    this.date = ('0' + date.getDate()).slice(-2) + "." + ('0' + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
  }
}

class StatusModel {

  id: number;

  isThere: number;

  mark: string;

  constructor(){
    this.isThere = 1;
  }
}
