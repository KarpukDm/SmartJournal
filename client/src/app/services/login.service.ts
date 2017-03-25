import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {LoginModel} from "../models/login.model";
import {IUserState} from "../reducers/user.reducer";
import {Store} from "@ngrx/store";
import {UserAction} from "../actions/user.action";

@Injectable()
export class LoginService {

  private loginURL: string;
  private logoutURL: string;
  private tokenName: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http,
              private store: Store<IUserState>) {
    this.loginURL = Constrains.baseURL + Constrains.loginApi;
    this.logoutURL = Constrains.baseURL + Constrains.logoutApi;
    this.tokenName = 'x-auth-token';
  }

  login(loginModel: LoginModel): Observable<any> {
    return this.http
      .post(this.loginURL, JSON.stringify(loginModel), {headers: this.headers})
      .do(resp => {
        console.log(resp.headers.get(this.tokenName));
        let date = new Date().getTime();
        let currentToken = resp.headers.get(this.tokenName);
        localStorage.setItem(this.tokenName, currentToken);
        localStorage.setItem(currentToken, date.toString());
        this.store.dispatch({ type: UserAction.LOGIN });
      });
  }

  logout(): Observable<any>{
    console.log(this.logoutURL);
    return this.http.get(this.logoutURL, {headers: this.headers})
      .do(res => {
        let token = localStorage.getItem(this.tokenName);
        localStorage.removeItem(this.tokenName);
        localStorage.removeItem(token);
        console.log(localStorage);
        this.store.dispatch({ type: UserAction.LOGOUT });
      });
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
