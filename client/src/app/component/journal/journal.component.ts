import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Template} from "../../model/template.model";
import {Layer} from "../../model/layer.model";
import {TemplateService} from "../../service/template.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  providers: [TemplateService]
})
export class JournalComponent implements OnInit {

  private errorMessage: string;
  private templates: Template[];
  private template: Template;
  private layerHistory: Layer[];
  private isLastLevel: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateService: TemplateService) {
    this.layerHistory = [];
    this.isLastLevel = false;
  }

  ngOnInit() {
    this.templateService.getMyTemplates()
      .subscribe(
        templates => {
          this.templates = templates;
          console.log(this.templates);
        },
        error => this.errorMessage = <any>error
      );

    this.layerHistory = [];
  }

  private selectTemplate(template: Template){
    this.template = template;
    this.layerHistory.push(this.template.layer);
  }

  private selectLayer(layer: Layer) {
    if(!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
    }
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
    this.isLastLevel = false;
  }

  private getTemplate(id: number){
    return this.templates[id];
  }

}
