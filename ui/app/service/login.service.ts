import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import "../rxjs-extensions";
import {Observable} from "rxjs";
import {LoginModel} from "../dto/login.model";
import {AuthModel} from "../dto/auth.model";

@Injectable()
export class LoginService {

    private loginUrl = "http://localhost:8080/authenticate";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    login(loginModel: LoginModel): Observable<AuthModel> {
        return this.http
            .post(this.loginUrl, JSON.stringify(loginModel), {headers: this.headers})
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