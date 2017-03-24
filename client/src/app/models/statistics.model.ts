import {DisciplineModel} from "./discipline.model";

export class StatisticsModel {

  discipline: DisciplineModel;

  date: string;

  status: StatusModel;

  constructor(){
    this.discipline = new DisciplineModel();
    this.status = new StatusModel();
    let date = new Date();
    this.date = ('0' + date.getDate()).slice(-2) + "." + ('0' + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
  }
}

class StatusModel {

  isThere: boolean;

  mark: string;

  constructor(){
    this.isThere = false;
  }
}
