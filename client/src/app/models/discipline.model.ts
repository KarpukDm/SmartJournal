import {LessonModel} from "./lesson.model";
import {UserModel} from "./user.model";
export class DisciplineModel {

  id: number;

  name: string;

  disciplineType: DisciplineTypeModel[];

  lessons: LessonModel[];

  account: UserModel;
}

export class DisciplineTypeModel {

  id: number;

  name: string;

  currentCounter: number;

  hoursNumber: number;
}
