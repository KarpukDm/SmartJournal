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
    this.layerHistory = [];
    this.selectedLayer = new Layer();
  }

  ngOnInit() {
    this.template.layer = new Layer();
    this.layerHistory.push(this.template.layer);
  }

  private addLayer() {

    let layer = this.layerHistory.slice(-1)[0];

    if (isNullOrUndefined(this.template.layer)) {
      this.template.layer = new Layer();
    }

    if ((!isNullOrUndefined(this.layer.layerName) || this.layer.layerName != "") &&
      (!isNullOrUndefined(this.layer.layerType) || this.layer.layerType != "")) {
      if (isNullOrUndefined(layer.layers)) {
        layer.layers = [];
      }
      layer.layers.push(this.layer);
      this.layer = new Layer();
    }
  }

  private selectLayer(layer: Layer) {
    this.selectedLayer = layer;
    this.layerHistory.push(layer);
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory)) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

}
