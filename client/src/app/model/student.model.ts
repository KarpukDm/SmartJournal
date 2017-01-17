import {Statistics} from "./statistics.model";
export class Student {

  id: number;

  name: string;

  statistics: Statistics[];

  constructor(){
    this.statistics = [];
  }
}
