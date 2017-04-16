import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {JournalModel} from "../../models/journal.model";
import {LayerModel} from "../../models/layer.model";
import {DisciplineModel} from "../../models/discipline.model";
import {StatisticsModel} from "../../models/statistics.model";
import {StudentModel} from "../../models/student.model";
import {Constrains} from "../../constraints";
import {JournalService} from "../../services/journal.service";
import {go} from "@ngrx/router-store";
import {Store} from "@ngrx/store";
import {AppState} from "app/app.state";
import {AverageScoreModel} from "../../components/statistics/types/average-score.model";
import {StatisticsService} from "../../services/statistics.service";
import {GET_INFO} from "../../reducers/sudent-info.reducer";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  private errorMessage: string;
  private journals: JournalModel[];
  private journal: JournalModel;
  private layerHistory: LayerModel[];
  private isSelected: boolean;
  private isLastLevel: boolean;
  private isNewLesson: boolean;
  private amountOfDays: number;
  private columnWidth: number;
  private disciplines: DisciplineModel[];
  private discipline: DisciplineModel;
  private editedStatistics: StatisticsModel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService,
              private store: Store<any>) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
    this.isNewLesson = null;
    this.columnWidth = 150;
    this.disciplines = [new DisciplineModel(), new DisciplineModel(), new DisciplineModel()];
    this.disciplines[0].name = "SDsadsadasdas";
    this.disciplines[1].name = "SDsadsadasdas";
    this.disciplines[2].name = "SDsadsadasdas";
  }

  ngOnInit() {

    this.store.dispatch(go([Constrains.journalPage]));

    this.journalService.getMyTemplates()
      .subscribe(
        templates => {
          this.journals = templates;
          console.log(this.journals);
        },
        error => this.errorMessage = <any>error
      );

    this.layerHistory = [];
    let screenResolution = window.screen.availWidth;
    console.log(screenResolution);
    this.amountOfDays = screenResolution / - this.columnWidth - 1 ;
  }

  private selectJournal(template: JournalModel) {
    this.journal = template;
    console.log(template);
    this.layerHistory.push(this.journal.layer);
    this.isSelected = true;
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if (!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private getStudents() {
    let layer = this.layerHistory.slice(-1)[0];
    return layer.students;
  }

  private selectLayer(layer: LayerModel) {
    if (!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
      if (this.isLastLevel == true) {
        this.store.dispatch({type: GET_INFO, payload: this.getInfo()});
      }
    }
  }

  private setDiscipline(discipline: DisciplineModel) {
    this.discipline = discipline;
  }

  private createNewRecord() {
    for (let st of this.getStudents()) {
      if (isNullOrUndefined(st.statistics)) {
        st.statistics = [];
      }
      let x = new StatisticsModel();
      x.journalId = this.journal.id;
      st.statistics.push(x);
    }
  }

  private setAbsent(student: StudentModel) {
    let stat = student.statistics.slice(-1)[0];
    stat.status.isThere = !stat.status.isThere;
    stat.status.mark = stat.status.isThere == false ? "H" : null;
  }

  private goUp() {
    if (this.layerHistory.length > 1) {
      this.layerHistory.pop();
    } else {
      this.isSelected = false;
      this.discipline = null;
    }
    this.isLastLevel = false;
    this.isNewLesson = null;
  }

  private getJournal(id: number) {
    return this.journals[id];
  }

  private isThere(student: StudentModel) {
    let stat = student.statistics.slice(-1)[0];
    return stat.status.isThere;
  }

  private getLastStatistics() {
    let layer = this.layerHistory.slice(-1)[0];
    if (!isNullOrUndefined(layer.students) && (layer.students.length > 0)
      && !isNullOrUndefined(layer.students[0].statistics)) {
      return layer.students[0].statistics.slice(this.amountOfDays);
    }
    return [];
  }

  private getStatusForSomeDate(statistics: StatisticsModel) {
    if (isNullOrUndefined(statistics.status.mark)) {
      if (statistics.status.isThere == true) {
        return "-";
      } else {
        return "H";
      }
    } else {
      return statistics.status.mark.toString();
    }
  }

  private setFlagIsNewLesson(flag: boolean) {
    console.log(flag);
    this.isNewLesson = flag;

    if (this.isNewLesson || this.getLastStatistics().length == 0) {
      this.createNewRecord(); // remove later
    }
  }

  private editMark(statistics: StatisticsModel) {
    this.editedStatistics = statistics;
  }

  private saveStatistics(){
    this.editedStatistics = null;
  }

  private eraseH(){
    this.editedStatistics.status.isThere = true;
    this.editedStatistics.status.mark = null;
  }

  private getStatisticsForLastFewDays(student: StudentModel) {
    if (isNullOrUndefined(student.statistics)) {
      return [];
    }
    let statistics = student.statistics.slice(this.amountOfDays);
    if (!isNullOrUndefined(statistics)) {
      if (statistics.length > 1) {
        statistics.pop();
      } else {
        statistics = [];
      }
    }
    return statistics;
  }

  private gotoJournalPage(): void {
    let link = [Constrains.journalPage];
    this.router.navigate(link);
  }

  private getInfo() {
    let info: string[] = [];
    for (let i of this.layerHistory) {
      if (i && i.layerName && i.layerType) {
        info.push(i.layerType + ": " + i.layerName);
      }
    }

    return info;
  }

  private getPassesNumber(student: StudentModel) {
    let counter: number = 0;
    for (let i of student.statistics) {
      if (!i.status.isThere) {
        counter++;
      }
    }
    return counter;
  }

  private getAVG(student: StudentModel) {
    let avg: number = 0;
    let counter: number = 0;
    for (let i of student.statistics) {
      if (i.status.mark && i.status.mark != 'H') {
        avg += Number(i.status.mark);
        counter++;
      }
    }

    if (counter == 0) {
      return "-"
    }

    return avg / counter;
  }

  private saveJournal() {

    this.journalService.saveJournal(this.journal)
      .subscribe(
        template => {
          console.log(template);
          this.journal = template;
        },
        error => this.errorMessage = <any>error
      );
  }

}
