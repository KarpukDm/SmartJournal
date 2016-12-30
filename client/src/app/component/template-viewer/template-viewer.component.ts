import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute, Router} from "@angular/router";
import {TemplateService} from "../../service/template.service";
import {Template} from "../../model/template.model";
import {isNullOrUndefined} from "util";
import {Layer} from "../../model/layer.model";

@Component({
  selector: 'app-template-viewer',
  templateUrl: './template-viewer.component.html',
  styleUrls: ['./template-viewer.component.css']
})
export class TemplateViewerComponent implements OnInit {

  private errorMessage: string;
  private template: Template;
  private layerHistory: Layer[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateSerice: TemplateService) {
    this.layerHistory = [];
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.templateSerice.getTemplatesById(id)
        .subscribe(
          template => {
            console.log(template);
            this.template = template;
          },
          error => this.errorMessage = <any>error
        );
    });

    this.layerHistory.push(this.template.layer);
  }

  private selectLayer(layer: Layer) {
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

}
