import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Template} from "../model/template.model";
import {Constrains} from "../constraints";
import "../rxjs-extensions";
import {type} from "os";

@Injectable()
export class TemplateService {

  private createTemplateURL: string;
  private saveTemplateURL: string;
  private findTemplateURL: string;
  private getMyTemplatesURL: string;

  constructor(private http: Http) {
    this.createTemplateURL = Constrains.baseURL + Constrains.createTemplateURL;
    this.saveTemplateURL = Constrains.baseURL + Constrains.saveTemplateURL;
    this.findTemplateURL = Constrains.baseURL + Constrains.findTemplateURL;
    this.getMyTemplatesURL = Constrains.baseURL + Constrains.getMyTemplatesURL;
  }

  prepareHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
    return headers;
  }

  createTemplate(template: Template): Observable<Template> {
    return this.http
      .post(this.createTemplateURL, JSON.stringify(template), {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  saveTemplate(template: Template): Observable<Template> {
    return this.http
      .post(this.saveTemplateURL, JSON.stringify(template), {headers: this.prepareHeaders()})
      .catch(this.handleError);
  }

  getTemplatesByType(type: string): Observable<Template[]> {
    let params = new URLSearchParams();
    params.set('type', type);

    return this.http.get(this.findTemplateURL, {search: params, headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMyTemplates(): Observable<Template[]> {
    return this.http.get(this.getMyTemplatesURL, {headers: this.prepareHeaders()})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTemplatesById(id: number): Observable<Template> {
    let params = new URLSearchParams();
    params.set('id', "" + id);
    return this.http.get(this.findTemplateURL, {search: params, headers: this.prepareHeaders()})
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
