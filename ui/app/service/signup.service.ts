import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {UserModel} from "../dto/user.model";
import {SignUpModel} from "../dto/signup.model";
import "rxjs/add/operator/toPromise";

@Injectable()
export class SignUpService {

    private signUpUrl = "http://localhost:8080/signup";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    createUser(signUpModel: SignUpModel): Promise<UserModel> {
        return this.http
            .post(this.signUpUrl, JSON.stringify(signUpModel), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}