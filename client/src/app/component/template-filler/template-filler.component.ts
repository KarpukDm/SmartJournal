import {Component, OnInit} from "@angular/core";
import {Template} from "../../model/template.model";
import {Layer} from "../../model/layer.model";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {TemplateService} from "../../service/template.service";
import {isNullOrUndefined} from "util";
import {Constrains} from "../../constraints";
import {Student} from "../../model/student.model";

@Component({
  selector: 'app-template-filler',
  templateUrl: './template-filler.component.html',
  styleUrls: ['./template-filler.component.css'],
  providers: [TemplateService]
})
export class TemplateFillerComponent implements OnInit {

  private errorMessage: string;
  private template: Template;
  private layerHistory: Layer[];
  private isLastLevel: boolean;
  private student: Student;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateService: TemplateService) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.student = new Student();
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

  private addStudent(){
    let layer = this.layerHistory.slice(-1)[0];
    layer.students.push(this.student);
    this.student = new Student();
  }

  private getStudents(){
    let layer = this.layerHistory.slice(-1)[0];
    return layer.students;
  }

  private selectLayer(layer: Layer) {
    if(!isNullOrUndefined(layer.layers)) {
      if(layer.layers.length == 0){
        this.isLastLevel = true;
        if(isNullOrUndefined(layer.students)) {
          layer.students = [];
        }
      }else{
        this.isLastLevel = false;
      }
      this.layerHistory.push(layer);
    }
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }
    this.isLastLevel = false;
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private saveTemplate(){

    this.templateService.createTemplate(this.template)
      .subscribe(
        template => {
          console.log(template);
          this.template = template;
          this.gotoViewTemplate(this.template.id);
        },
        error => this.errorMessage = <any>error
      );
  }

  private gotoViewTemplate(id: number): void {
    let link = [Constrains.viewTemplatePage, id];
    this.router.navigate(link);
  }

}
