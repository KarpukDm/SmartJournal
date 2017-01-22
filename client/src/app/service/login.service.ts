import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {LoginModel} from "../model/login.model";
import {Observer} from "../model/observer.model";

@Injectable()
export class LoginService {

  private loginURL: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http,
              private loginService: LoginService) {
    this.loginURL = Constrains.baseURL + Constrains.loginURL
  }

  login(loginModel: LoginModel): Observable<Observer> {
    return this.http
      .post(this.loginURL, JSON.stringify(loginModel), {headers: this.headers})
      .map(LoginService.extractData)
      .catch(LoginService.handleError);
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
