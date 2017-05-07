import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GroupInfoModel} from "../../models/group-info.model";
import {DisciplineTypeModel} from "../../models/discipline.model";
import {SELECT} from "../../reducers/lesson-type.reducer";

@Component({
  selector: 'students-info',
  templateUrl: './lesson-info.component.html',
  styleUrls: ['./lesson-info.component.css']
})
export class LessonInfoComponent implements OnInit {

  @Input() groupInfo: GroupInfoModel[];

  @Input() lessonInfo: GroupInfoModel[];

  private lessonType: DisciplineTypeModel;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.groupInfo = [];
    this.lessonInfo = [];

    this.store
      .select(x => x.studentInfoReducer)
      .map(x => x)
      .subscribe((x) => {
        console.log(x);
        this.groupInfo = x[0];
        this.lessonInfo = x[1];
      });
  }

  private selectLessonType(lessonType: string) {
    console.log(lessonType);
    let type = lessonType.split(':')[0];
    console.log(type);
    this.store.dispatch({type: SELECT, payload: type});
  }

}
