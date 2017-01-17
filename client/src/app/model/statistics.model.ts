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
  }
}

class Status {

  isThere: boolean;

  mark: number;
}
