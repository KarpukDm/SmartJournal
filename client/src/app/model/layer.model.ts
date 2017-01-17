import {Student} from "./student.model";
export class Layer {

  layerName: string;

  layerType: string;

  layers: Layer[];

  students: Student[];

  constructor(){
    this.students = [];
    this.layers = [];
  }
}
