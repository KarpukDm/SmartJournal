import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {JournalModel} from "../models/journal.model";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {LayerModel} from "../models/layer.model";
import {AcademicPlanModel} from "../models/academic-plan.model";

@Injectable()
export class JournalService {

  private createJournalURL: string;
  private saveJournalURL: string;
  private findJournalURL: string;
  private getMyJournalsURL: string;

  constructor(private http: Http) {
    this.createJournalURL = Constrains.baseURL + Constrains.createJournalApi;
    this.saveJournalURL = Constrains.baseURL + Constrains.saveJournalApi;
    this.findJournalURL = Constrains.baseURL + Constrains.findJournalApi;
    this.getMyJournalsURL = Constrains.baseURL + Constrains.getMyJournalsApi;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  createJournal(journal: JournalModel): Observable<JournalModel> {
    return this.http
      .post(this.createJournalURL, JSON.stringify(journal), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  saveJournal(academicPlan: AcademicPlanModel): Observable<AcademicPlanModel> {
    console.log(academicPlan);
    return this.http
      .post(this.saveJournalURL, JSON.stringify(academicPlan), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTemplatesByType(type: string): Observable<JournalModel[]> {
    let params = new URLSearchParams();
    params.set('type', type);

    return this.http.get(this.findJournalURL, {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMyTemplates(): Observable<JournalModel[]> {
    return this.http.get(this.getMyJournalsURL, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getJournalById(id: number): Observable<JournalModel> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.findJournalURL, {search: params, headers: this.prepareHeaders()})
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
