import {Action} from "@ngrx/store";

export interface UserState {
  info: string[];
}

export const GET_INFO = 'GET_INFO';

export function studentInfoReducer(info: string[] = [], action: Action): string[] {

  switch (action.type) {
    case GET_INFO: {
      return action.payload;
    }

    default: {
      return info
    }
  }
}
