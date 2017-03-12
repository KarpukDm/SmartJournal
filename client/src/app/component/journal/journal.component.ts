import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Template} from "../../model/template.model";
import {Layer} from "../../model/layer.model";
import {TemplateService} from "../../service/template.service";
import {isNullOrUndefined} from "util";
import {Statistics} from "../../model/statistics.model";
import {Student} from "../../model/student.model";
import {Constrains} from "../../constraints";
import {Discipline} from "../../model/discipline.model";

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
  private isNewLesson: boolean;
  private amountOfDays: number;
  private columnWidth: number;
  private disciplines: Discipline[];
  private discipline: Discipline;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private templateService: TemplateService) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
    this.isNewLesson = null;
    this.columnWidth = 136;
    this.disciplines = [ new Discipline(), new Discipline(), new Discipline()];
    this.disciplines[0].name = "SDsadsadasdas";
    this.disciplines[1].name = "SDsadsadasdas";
    this.disciplines[2].name = "SDsadsadasdas";
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
    let screenResolution = window.screen.availWidth;
    console.log(screenResolution);
    this.amountOfDays = screenResolution / -this.columnWidth;
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
        if(this.getStudents()[0].statistics.length == 0) {
          console.log("!!!!!!!!!!!");
          this.createNewRecord(); // remove later
        }
      }
    }
  }

  private setDiscipline(discipline: Discipline){
    this.discipline = discipline;
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
    stat.status.isAbsent = !stat.status.isAbsent;
    stat.status.mark = stat.status.isAbsent == true ? "H" : null;
  }

  private goUp(){
    if(this.layerHistory.length > 1) {
      this.layerHistory.pop();
    }else{
      this.isSelected = false;
      this.discipline = null;
    }
    this.isLastLevel = false;
    this.isNewLesson = null;
  }

  private getTemplate(id: number){
    return this.templates[id];
  }

  private isAbsent(student: Student){
    let stat = student.statistics.slice(-1)[0];
    return stat.status.isAbsent;
  }

  private getLastStatistics(){
    let layer = this.layerHistory.slice(-1)[0];
    if(!isNullOrUndefined(layer.students) && (layer.students.length > 0)
    && !isNullOrUndefined(layer.students[0].statistics)) {
      return layer.students[0].statistics.slice(this.amountOfDays);
    }
    return [];
  }

  private getStatusForSomeDate(statistics: Statistics){
    console.log(statistics);
    if(isNullOrUndefined(statistics.status.mark)){
      if(statistics.status.isAbsent == false){
        return "-";
      }else{
        return "H";
      }
    }else{
      return statistics.status.mark.toString();
    }
  }

  private setFlagIsNewLesson(flag: boolean){
    console.log(flag);
    this.isNewLesson = flag;

    if(this.isNewLesson){
      this.createNewRecord(); // remove later
    }
  }

  private getStatisticsForLastFewDays(student: Student){
    if(isNullOrUndefined(student.statistics)){
      return [];
    }
    let statistics = student.statistics.slice(this.amountOfDays);
    if(!isNullOrUndefined(statistics)) {
      if (statistics.length > 1) {
        statistics.pop();
      } else {
        statistics = [];
      }
    }
    console.log(statistics);
    return statistics;
  }

  private gotoJournalPage(): void {
    let link = [Constrains.journalPage];
    this.router.navigate(link);
  }

  private getSelectedLayer(){
    let layer = this.layerHistory.slice(-1)[0];
    return layer.layerName + ": " + this.discipline.name;
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
