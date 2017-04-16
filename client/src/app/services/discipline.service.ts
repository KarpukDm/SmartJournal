import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {DisciplineModel} from "../models/discipline.model";

@Injectable()
export class DisciplineService {

  private saveDisciplineURL: string;
  private getMyDisciplinesURL: string;

  constructor(private http: Http) {
    this.saveDisciplineURL = Constrains.baseURL + Constrains.saveDisciplinesApi;
    this.getMyDisciplinesURL = Constrains.baseURL + Constrains.myDisciplinesApi;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  saveJournal(discipline: DisciplineModel): Observable<DisciplineModel> {
    console.log(discipline);
    return this.http
      .post(this.saveDisciplineURL, JSON.stringify(discipline), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMyDisciplines(): Observable<DisciplineModel[]> {
    return this.http.get(this.getMyDisciplinesURL, {headers: this.prepareHeaders()})
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
