import {StudentModel} from "./student.model";
import {GroupInfoModel} from "./group-info.model";

export class LayerModel {

  id: number;

  layerName: string;

  layerType: string;

  layers: LayerModel[];

  students: StudentModel[];

  groupInfo: GroupInfoModel[];

  constructor(){
    this.students = [];
    this.layers = [];
    this.groupInfo = [];
  }
}
