import {LayerModel} from "./layer.model";

export class JournalModel {

  id: number;

  journalName: string;

  layer: LayerModel;

  constructor(){
    this.layer = new LayerModel();
  }

}
