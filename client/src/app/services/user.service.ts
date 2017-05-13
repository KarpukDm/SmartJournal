import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {UserState} from "../reducers/user.reducer";
import {Store} from "@ngrx/store";
import {AccountModel} from "../models/account.model";

@Injectable()
export class UserService {

  private getUsersURL: string;
  private getUsersByNameURL: string;

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  constructor(private http: Http,
              private store: Store<UserState>) {
    this.getUsersURL = Constrains.baseURL + Constrains.getUsersApi;
    this.getUsersByNameURL = Constrains.baseURL + Constrains.getUsersByNameApi;
  }

  getUsers(): Observable<AccountModel[]> {
    return this.http.get(this.getUsersURL, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUsersByName(name: string): Observable<AccountModel[]> {
    let params = new URLSearchParams();
    params.set('name', name);

    return this.http.get(this.getUsersByNameURL, {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
