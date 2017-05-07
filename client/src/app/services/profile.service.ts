import {Injectable} from "@angular/core";
import {Headers, Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {JournalModel} from "../models/journal.model";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {AcademicPlanModel} from "../models/academic-plan.model";
import {StatisticsModel} from "../models/statistics.model";

@Injectable()
export class ProfileService {

  private getAccountURL: string;

  constructor(private http: Http) {
    this.getAccountURL = Constrains.baseURL + Constrains.getAccountApi;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  getAccount(): Observable<string> {
    return this.http.get(this.getAccountURL, {headers: this.prepareHeaders()})
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
