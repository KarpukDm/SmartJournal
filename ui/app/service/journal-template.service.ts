import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import "../rxjs-extensions";
import {Observable} from "rxjs";
import {JournalTemplateModel} from "../dto/journal-template.model";

@Injectable()
export class JournalTemplateService {

    private createTemplateUrl = "http://localhost:8080/template/create";
    private findTemplateUrl = "http://localhost:8080/template";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    createTemplate(journalTemplate: JournalTemplateModel): Observable<JournalTemplateModel> {
        return this.http
            .post(this.createTemplateUrl, JSON.stringify(journalTemplate), {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTemplates(type: string): Observable<JournalTemplateModel[]>{
        let params = new URLSearchParams();
        params.set('type', type);

        return this.http.get(this.findTemplateUrl, { search: params })
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