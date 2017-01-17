import {Layer} from "./layer.model";

export class Template {

  id: number;

  templateName: string;

  layer: Layer;

  constructor(){
    this.layer = new Layer();
  }

}
