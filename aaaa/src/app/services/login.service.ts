import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {LoginModel} from "../models/login.model";

@Injectable()
export class LoginService {

  private loginURL: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {
    this.loginURL = Constrains.baseURL + Constrains.loginApi
  }

  login(loginModel: LoginModel): Observable<any> {
    return this.http
      .post(this.loginURL, JSON.stringify(loginModel), {headers: this.headers})
      .do(resp => {
        console.log(resp.headers.get('x-auth-token'));
        localStorage.setItem('x-auth-token', resp.headers.get('x-auth-token'));
      });
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
