import {Action} from "@ngrx/store";
import {AuthService} from "../services/auth.service";

export interface IUserState {
  state: string;
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTHORIZED = 'authorized';
export const UNAUTHORIZED = 'unauthorized';

export function userReducer(state: string = UNAUTHORIZED, action: Action): string {

  switch (action.type) {
    case LOGIN: {
      return AUTHORIZED;
    }

    case LOGOUT: {
      return UNAUTHORIZED;
    }

    default: {
      let authService = new AuthService();
      return authService.isAuthorize()? AUTHORIZED : UNAUTHORIZED;
    }
  }
}
