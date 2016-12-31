import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute, Router} from "@angular/router";
import {TemplateService} from "../../service/template.service";
import {Template} from "../../model/template.model";
import {isNullOrUndefined} from "util";
import {Layer} from "../../model/layer.model";
import {Constrains} from "../../constraints";

@Component({
  selector: 'app-template-viewer',
  templateUrl: './template-viewer.component.html',
  styleUrls: ['./template-viewer.component.css'],
  providers: [TemplateService]
})
export class TemplateViewerComponent implements OnInit {

  private errorMessage: string;
  private template: Template;
  private layerHistory: Layer[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateService: TemplateService) {
    this.layerHistory = [];
  }

  ngOnInit() {
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

  private gotoEditTemplate(id: number): void {
    let link = [Constrains.editTemplateURL, id];
    this.router.navigate(link);
  }

}
