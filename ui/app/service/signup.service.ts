import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {UserModel} from "../dto/user.model";
import {SignUpModel} from "../dto/signup.model";
import "../rxjs-extensions";
import {Observable} from "rxjs";
import {AppSettings} from "../constants/app.settings";

@Injectable()
export class SignUpService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    createUser(signUpModel: SignUpModel): Observable<UserModel> {
        return this.http
            .post(AppSettings.signupURL, JSON.stringify(signUpModel), {headers: this.headers})
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