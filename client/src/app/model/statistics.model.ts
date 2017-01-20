import {Discipline} from "./discipline.model";
import {Observer} from "./observer.model";
export class Statistics {

  discipline: Discipline;

  observer: Observer;

  date: string;

  status: Status;

  constructor(){
    this.discipline = new Discipline();
    this.observer = new Observer();
    this.status = new Status();
    let date = new Date();
    this.date = ('0' + date.getDate()).slice(-2) + "." + ('0' + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
  }
}

class Status {

  isAbsent: boolean;

  mark: number;

  constructor(){
    this.isAbsent = false;
  }
}
