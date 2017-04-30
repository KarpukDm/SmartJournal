import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {AcademicPlanModel} from "../models/academic-plan.model";

@Injectable()
export class AcademicPlanService {

  private saveAcademicPlanURL: string;

  constructor(private http: Http) {
    this.saveAcademicPlanURL = Constrains.baseURL + Constrains.createAcademicPlanApi;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  public saveAcademicPlan(academicPlan: AcademicPlanModel) {
    return this.http
      .post(this.saveAcademicPlanURL, JSON.stringify(academicPlan), {headers: this.prepareHeaders()})
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
