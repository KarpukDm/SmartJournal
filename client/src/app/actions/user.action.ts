import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";

@Injectable()
export class UserAction {

  static LOGIN = 'LOGIN';
  static LOGOUT = 'LOGOUT';

  static login(): Action {
    return {
      type: UserAction.LOGIN
    };
  }

  static logout(data): Action {
    return {
      type: UserAction.LOGOUT,
      payload: data
    };
  }
}
