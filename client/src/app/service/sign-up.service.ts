import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {User} from "../model/user.model";
import {SignUpModel} from "../model/sign-up.model";

@Injectable()
export class SignUpService {

  private signUpURL: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {
    this.signUpURL = Constrains.baseURL + Constrains.signUpApi;
  }

  signUp(signUpModel: SignUpModel): Observable<User> {
    return this.http
      .post(this.signUpURL, JSON.stringify(signUpModel), {headers: this.headers})
      .map(SignUpService.extractData)
      .catch(SignUpService.handleError);
  }

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
