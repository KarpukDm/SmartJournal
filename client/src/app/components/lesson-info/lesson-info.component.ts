import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GroupInfoModel} from "../../models/group-info.model";

@Component({
  selector: 'students-info',
  templateUrl: './lesson-info.component.html',
  styleUrls: ['./lesson-info.component.css']
})
export class LessonInfoComponent implements OnInit {

  @Input() info: GroupInfoModel[];

  @Input() lessonInfo: GroupInfoModel[];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.info = [];
    this.lessonInfo = [];

    this.store
      .select(x => x.studentInfoReducer)
      .map(x => x)
      .subscribe((x) => {
        console.log(x);
        this.info = x;
      });

  }

}
