import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Template} from "../../model/template.model";
import {Layer} from "../../model/layer.model";
import {TemplateService} from "../../service/template.service";
import {isNullOrUndefined} from "util";
import {Statistics} from "../../model/statistics.model";
import {Student} from "../../model/student.model";
import {Constrains} from "../../constraints";

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
  private isSelected: boolean;
  private isLastLevel: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateService: TemplateService) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
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
    console.log(template);
    this.layerHistory.push(this.template.layer);
    this.isSelected = true;
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if(!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private getStudents(){
    let layer = this.layerHistory.slice(-1)[0];
    return layer.students;
  }

  private selectLayer(layer: Layer) {
    if(!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
      if(this.isLastLevel == true){
        this.createNewRecord(); // remove later
      }
    }
  }

  private createNewRecord(){
    for(let st of this.getStudents()){
      if(isNullOrUndefined(st.statistics)){
        st.statistics = [];
      }
      let x = new Statistics();
      st.statistics.push(x);
    }
  }

  private setAbsent(student: Student){
    let stat = student.statistics.slice(-1)[0];
    stat.status.mark = null;
    stat.status.isAbsent = !stat.status.isAbsent;
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }else{
      this.isSelected = false;
    }
    this.isLastLevel = false;
  }

  private getTemplate(id: number){
    return this.templates[id];
  }

  private isAbsent(student: Student){
    let stat = student.statistics.slice(-1)[0];
    return stat.status.isAbsent;
  }

  private gotoJournalPage(): void {
    let link = [Constrains.journalURL];
    this.router.navigate(link);
  }

  private saveTemplate() {

    this.templateService.saveTemplate(this.template)
      .subscribe(
        template => {
          console.log(template);
          this.template = template;
          this.gotoJournalPage();
        },
        error => this.errorMessage = <any>error
      );
  }

}
