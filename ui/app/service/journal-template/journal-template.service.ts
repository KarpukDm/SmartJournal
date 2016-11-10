import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import "../../rxjs-extensions";
import {Observable} from "rxjs";
import {JournalTemplateModel} from "../../dto/journal-template.model";
import {AppSettings} from "../../constants/app.settings";

@Injectable()
export class JournalTemplateService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private createTemplateURL: string;
    private findTemplateURL: string;

    constructor(private http: Http) {
        this.createTemplateURL = AppSettings.baseURL + AppSettings.createTemplateURL;
        this.findTemplateURL = AppSettings.baseURL + AppSettings.findTemplateURL;
    }

    createTemplate(journalTemplate: JournalTemplateModel): Observable<JournalTemplateModel> {
        return this.http
            .post(this.createTemplateURL, JSON.stringify(journalTemplate), {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTemplatesByType(type: string): Observable<JournalTemplateModel[]>{
        let params = new URLSearchParams();
        params.set('type', type);

        return this.http.get(this.findTemplateURL, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTemplatesByIndex(id: number): Observable<JournalTemplateModel[]>{
        let params = new URLSearchParams();
        params.set('id', "" + id);

        return this.http.get(this.findTemplateURL, { search: params })
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