import {Injectable} from "@angular/core";
import {Headers, Http, Response, URLSearchParams} from "@angular/http";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {AcademicPlanModel} from "../models/academic-plan.model";
import {Observable} from "rxjs";

@Injectable()
export class AcademicPlanService {

  private saveAcademicPlanURL: string;
  private getAcademicPlanByDisciplineIdURL: string;

  constructor(private http: Http) {
    this.saveAcademicPlanURL = Constrains.baseURL + Constrains.createAcademicPlanApi;
    this.getAcademicPlanByDisciplineIdURL = Constrains.baseURL + Constrains.getAcademicPlanByDisciplineIdApi;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  public saveAcademicPlan(academicPlan: AcademicPlanModel) {
    console.log(academicPlan);
    return this.http
      .post(this.saveAcademicPlanURL, JSON.stringify(academicPlan), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAcademicPlanByDisciplineId(id: number): Observable<AcademicPlanModel[]> {
    console.log(id);
    let params = new URLSearchParams();
    params.set('id', "  " + id);
    console.log(params);
    return this.http.get(this.getAcademicPlanByDisciplineIdURL, {search: params, headers: this.prepareHeaders()})
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
