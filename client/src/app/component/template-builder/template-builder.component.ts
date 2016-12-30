import {Component, OnInit} from "@angular/core";
import {Template} from "../../model/template.model";
import {Layer} from "../../model/layer.model";
import {isNullOrUndefined} from "util";
import {TemplateService} from "../../service/template.service";
import {Router} from "@angular/router";
import {Constrains} from "../../constraints";
import {Location} from "@angular/common";

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.css'],
  providers: [TemplateService, ]
})
export class TemplateBuilderComponent implements OnInit {

  private template: Template;
  private layer: Layer;
  private selectedLayer: Layer;
  private layerHistory: Layer[];
  private errorMessage: string;

  constructor(private templateService: TemplateService,
              private location: Location,
              private router: Router) {
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

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory)) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private saveTemplate(){
    console.log(this.template);

    this.templateService.createTemplate(this.template)
      .subscribe(
        template => {
          console.log(template);
          this.template = template;
          //this.gotoViewTemplate(this.template.id);
        },
        error => this.errorMessage = <any>error
      );
  }

  private gotoViewTemplate(id: number): void {
    let link = [Constrains.viewTemplateURL, id];
    this.router.navigate(link);
  }

  goBack(): void {
    this.location.back();
  }

}
