import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {UserModel} from "../dto/user.model";
import {SignUpModel} from "../dto/signup.model";
import "../rxjs-extensions";
import {Observable} from "rxjs";

@Injectable()
export class SignUpService {

    private signUpUrl = "http://localhost:8080/signup";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    createUser(signUpModel: SignUpModel): Observable<UserModel> {
        return this.http
            .post(this.signUpUrl, JSON.stringify(signUpModel), {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}