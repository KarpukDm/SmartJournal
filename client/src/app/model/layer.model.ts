import {StudentModel} from "./student.model";

export class LayerModel {

  layerName: string;

  layerType: string;

  layers: LayerModel[];

  students: StudentModel[];

  constructor(){
    this.students = [];
    this.layers = [];
  }
}
