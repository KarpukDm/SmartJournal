import {StatisticsModel} from "./statistics.model";

export class LessonModel {

  id: number;

  date: string;

  theme: string;

  description: string;

  lessonType: string;

  completeFlag: boolean;

  statistics: StatisticsModel[];

}
