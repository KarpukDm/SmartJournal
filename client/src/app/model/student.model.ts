import {StatisticsModel} from "./statistics.model";

export class StudentModel {

  id: number;

  name: string;

  statistics: StatisticsModel[];

  constructor(){
    this.statistics = [];
  }
}
