import {Component, OnInit} from "@angular/core";
import {Layer} from "../../model/layer.model";
import {Template} from "../../model/template.model";
import {TemplateService} from "../../service/template.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Constrains} from "../../constraints";

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css'],
  providers: [TemplateService]
})
export class TemplateEditorComponent implements OnInit {

  private errorMessage: string;
  private template: Template;
  private layerHistory: Layer[];
  private isEdit: boolean;
  private editedLayer: Layer;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateService: TemplateService) {
    this.layerHistory = [];
    this.template = new Template();
    this.isEdit = false;
    this.editedLayer = new Layer();
  }

  ngOnInit() {
    console.log(this.template);
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.templateService.getTemplatesById(id)
        .subscribe(
          template => {
            this.template = template;
            console.log(this.template);
            this.layerHistory.push(this.template.layer);
          },
          error => this.errorMessage = <any>error
        );
    });
  }

  private selectLayer(layer: Layer) {
    if(!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
    }
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private edit(layer: Layer){
    this.isEdit = true;
    this.editedLayer = layer;
  }

  private saveTemplate(){

    this.templateService.createTemplate(this.template)
      .subscribe(
        template => {
          this.template = template;
          console.log(this.template);
          this.gotoViewTemplate(this.template.id);
        },
        error => this.errorMessage = <any>error
      );
  }

  private gotoViewTemplate(id: number): void {
    console.log(id);
    let link = [Constrains.viewTemplateURL, id];
    this.router.navigate(link);
  }

}
