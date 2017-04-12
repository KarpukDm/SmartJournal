import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {UserState} from "../reducers/user.reducer";
import {Store} from "@ngrx/store";

@Injectable()
export class StatisticsService {

  private averageScoreURL: string;

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  constructor(private http: Http,
              private store: Store<UserState>) {
    this.averageScoreURL = Constrains.baseURL + Constrains.getAverageScore;
  }

  getAverageScore(): Observable<any>{
    return this.http.get(this.averageScoreURL, {headers: this.prepareHeaders()})
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
