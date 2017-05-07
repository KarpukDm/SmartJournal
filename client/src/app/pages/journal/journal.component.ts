import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {LayerModel} from "../../models/layer.model";
import {DisciplineModel} from "../../models/discipline.model";
import {StatisticsModel} from "../../models/statistics.model";
import {StudentModel} from "../../models/student.model";
import {Constrains} from "../../constraints";
import {JournalService} from "../../services/journal.service";
import {go} from "@ngrx/router-store";
import {Store} from "@ngrx/store";
import {GET_INFO} from "../../reducers/sudent-info.reducer";
import {DisciplineService} from "../../services/discipline.service";
import {AcademicPlanModel} from "../../models/academic-plan.model";
import {AcademicPlanService} from "../../services/academic-plan.service";
import {LessonModel} from "../../models/lesson.model";
import {GroupInfoModel} from "../../models/group-info.model";
import {StatisticsService} from "../../services/statistics.service";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  private errorMessage: string;
  private isSelected: boolean;
  private isNewLesson: boolean;
  private amountOfDays: number;
  private columnWidth: number;
  private disciplines: DisciplineModel[];
  private discipline: DisciplineModel;
  private editedStatistics: StatisticsModel;
  private academicPlans: AcademicPlanModel[];
  private academicPlan: AcademicPlanModel;
  private layer: LayerModel;
  private lessons: LessonModel[];

  private isShowTheme: boolean;
  private lesson: LessonModel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private disciplineService: DisciplineService,
              private academicPlanService: AcademicPlanService,
              private journalService: JournalService,
              private store: Store<any>) {
    this.isSelected = false;
    this.isNewLesson = null;
    this.columnWidth = 150;
    this.disciplines = [];
    this.academicPlan = new AcademicPlanModel();
    this.isShowTheme = false;
  }

  ngOnInit() {

    this.store.dispatch(go([Constrains.journalPage]));

    this.disciplineService.getMyDisciplines()
      .subscribe(
        disciplines => {
          this.disciplines = disciplines;
          console.log(this.disciplines);
        },
        error => this.errorMessage = <any>error
      );

    let screenResolution = window.screen.availWidth;
    console.log(screenResolution);
    this.amountOfDays = screenResolution / -this.columnWidth - 1;
  }

  private getStudents() {
    return this.layer.students;
  }

  private selectAcademicPlan(academicPlan: AcademicPlanModel) {
    this.layer = academicPlan.layer;
    this.lessons = academicPlan.lessons;
    this.academicPlan = academicPlan;
    console.log(academicPlan);
    console.log(this.lessons);

    if (!isNullOrUndefined(this.layer.layers)) {
      this.isSelected = true;
      this.store.dispatch({type: GET_INFO, payload: this.getInfo()});
      this.setFlagIsNewLesson(false);
    }
  }

  private setDiscipline(discipline: DisciplineModel) {
    this.discipline = discipline;

    console.log(discipline);
    this.academicPlanService.getAcademicPlanByDisciplineId(discipline.id)
      .subscribe(
        academicPlans => {
          this.academicPlans = academicPlans;
          console.log(this.academicPlans);
        },
        error => this.errorMessage = <any>error
      );
  }

  private showTheme(lesson: LessonModel) {
    console.log("!!!");
    this.lesson = lesson;
    this.isShowTheme = !this.isShowTheme;
  }

  private createNewRecord() {

    let flag: boolean;
    for (let l of this.academicPlan.lessons) {
      flag = l.completeFlag;
    }
    if (flag) {
      return;
    }

    let lessonStatistics: StatisticsModel[] = [];
    for (let st of this.getStudents()) {
      if (isNullOrUndefined(st.statistics)) {
        st.statistics = [];
      }
      let x = new StatisticsModel();
      console.log(this.lessons);
      st.statistics.push(x);
      lessonStatistics.push(x);
    }

    console.log(this.academicPlan.lessons);
    for (let l of this.academicPlan.lessons) {
      if (!l.completeFlag) {
        l.completeFlag = true;
        l.statistics = lessonStatistics;
        break;
      }
    }

    this.store.dispatch({type: GET_INFO, payload: this.getInfo()});
  }

  private setAbsent(student: StudentModel) {
    let stat = student.statistics.slice(-1)[0];
    stat.status.isThere = !stat.status.isThere;
    stat.status.mark = stat.status.isThere == false ? "H" : null;
  }

  private goUp() {
    this.isSelected = false;
    this.discipline = null;
    this.isNewLesson = null;
  }

  private isThere(student: StudentModel) {
    let stat = student.statistics.slice(-1)[0];
    return stat.status.isThere;
  }

  private getLastLessons() {

    console.log(this.academicPlan.lessons);

    if (!isNullOrUndefined(this.academicPlan.lessons)) {
      let lessons: LessonModel[] = [];

      for (let i of this.academicPlan.lessons) {
        if (i.completeFlag) {
          lessons.push(i);
        }
      }
      return lessons.slice(this.amountOfDays);
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

    if (this.isNewLesson || this.getLastLessons().length == 0) {
      this.createNewRecord(); // remove later
    }
  }

  private editMark(statistics: StatisticsModel) {
    this.editedStatistics = statistics;
  }

  private saveStatistics() {
    this.editedStatistics = null;
  }

  private eraseH() {
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

    let info: GroupInfoModel[][] = [];

    let groupInfo: GroupInfoModel[] = [];
    for (let i of this.layer.groupInfo) {
      groupInfo.push(i);
    }
    let x = new GroupInfoModel();
    x.info = this.layer.layerType + ": " + this.layer.layerName;

    groupInfo.push(x);

    let lessonInfo: GroupInfoModel[] = [];

    for (let type of this.discipline.disciplineTypes) {
      let commonCounter = 0;
      let completeCounter = 0;
      for (let l of this.academicPlan.lessons) {
        if (l.lessonType === type.name) {
          commonCounter++;
          if (l.completeFlag) {
            completeCounter++;
          }
        }
      }

      let lesson = new GroupInfoModel();
      lesson.info = type.name + ": " + completeCounter + "/" + commonCounter;
      lessonInfo.push(lesson);
    }

    info.push(groupInfo);
    info.push(lessonInfo);

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

    return (avg / counter).toFixed(2);
  }

  private updateCell(st: StatisticsModel) {
    console.log("!!!!!!!!!!!!!!!!!");
    this.journalService.updateCell(st)
      .subscribe(() => {
      });
  }

  private saveJournal() {

    console.log(this.academicPlan);

    this.journalService.saveJournal(this.academicPlan)
      .subscribe(
        academicPlan => {
          console.log(academicPlan);
          this.academicPlan = academicPlan;
        },
        error => this.errorMessage = <any>error
      );
  }

}
