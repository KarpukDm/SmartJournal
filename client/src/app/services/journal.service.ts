import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {JournalModel} from "../models/journal.model";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {AcademicPlanModel} from "../models/academic-plan.model";
import {StatisticsModel} from "../models/statistics.model";
import {StudentModel} from "../models/student.model";

@Injectable()
export class JournalService {

  private createJournalURL: string;
  private saveJournalURL: string;
  private updateJournalURL: string;
  private findJournalURL: string;
  private getMyJournalsURL: string;
  private updateCellURL: string;
  private uploadFileURL: string;

  constructor(private http: Http) {
    this.createJournalURL = Constrains.baseURL + Constrains.createJournalApi;
    this.saveJournalURL = Constrains.baseURL + Constrains.saveJournalApi;
    this.findJournalURL = Constrains.baseURL + Constrains.findJournalApi;
    this.getMyJournalsURL = Constrains.baseURL + Constrains.getMyJournalsApi;
    this.updateCellURL = Constrains.baseURL + Constrains.updateCellApi;
    this.updateJournalURL = Constrains.baseURL + Constrains.updateJournalApi;
    this.uploadFileURL = Constrains.baseURL + Constrains.uploadFileApi;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  headerForUpload() {
    let headers = new Headers();
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    headers.append('enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  uploadFile(formData: FormData): Observable<StudentModel[]> {
    console.log(formData);
    return this.http.post(this.uploadFileURL, formData, this.headerForUpload())
      .map(this.extractData)
      .catch(this.handleError);
  }

  createJournal(journal: JournalModel): Observable<JournalModel> {
    return this.http
      .post(this.createJournalURL, JSON.stringify(journal), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateJournal(journal: JournalModel): Observable<JournalModel> {
    console.log(journal);
    return this.http
      .post(this.updateJournalURL, JSON.stringify(journal), {headers: this.prepareHeaders()})
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

  updateCell(st: StatisticsModel) {
    return this.http
      .post(this.updateCellURL, JSON.stringify(st), {headers: this.prepareHeaders()})
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
