import {Action} from "@ngrx/store";

export interface LessonTypeState {
  type: string;
}

export const SELECT = 'SELECT';

export function lessonTypeReducer(info: string = "", action: Action): string {

  switch (action.type) {
    case SELECT: {
      return action.payload;
    }

    default: {
      return info
    }
  }
}
