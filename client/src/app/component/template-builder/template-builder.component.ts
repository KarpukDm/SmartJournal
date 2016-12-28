import {Component, OnInit} from "@angular/core";
import {Template} from "../../model/template.model";
import {Layer} from "../../model/layer.model";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.css']
})
export class TemplateBuilderComponent implements OnInit {

  private template: Template;
  private layer: Layer;
  private selectedLayer: Layer;
  private layerHistory: Layer[];

  constructor() {
    this.template = new Template();
    this.layer = new Layer();
  }

  ngOnInit() {
  }

  private addLayout(layer: Layer) {

    if(isNullOrUndefined(layer)) {
      this.selectedLayer = layer;

      if (isNullOrUndefined(this.template.layers)) {
        this.template.layers = [];
      }

      if ((!isNullOrUndefined(this.layer.layerName) || this.layer.layerName != "") &&
        (!isNullOrUndefined(this.layer.layerType) || this.layer.layerType != "")) {
        if(isNullOrUndefined(this.layer.layers)){
          this.selectedLayer.layers = [];
        }
        this.selectedLayer.layers.push(this.layer);
        this.layer = new Layer();
      }
    }
  }


  private getLayouts(){
    if(!isNullOrUndefined(this.template) && !isNullOrUndefined(this.template.layers)) {
      return this.template.layers;
    }
  }

}
