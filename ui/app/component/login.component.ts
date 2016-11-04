import {Component} from "@angular/core";
import "../rxjs-extensions";
import {LoginModel} from "../dto/login.model";
import {AuthModel} from "../dto/auth.model";
import {LoginService} from "../service/login.service";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: '../resources/view/login.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [LoginService]
})
export class LoginComponent {
    loginModel: LoginModel;
    authModel: AuthModel;
    errorMessage: string;

    constructor(private loginService: LoginService) {
        this.authModel = new AuthModel();
        this.loginModel = {
            email: "karpukdm@yandex.ru",
            password: "1111111"
        };
    }

    login(): void {
        this.loginService.login(this.loginModel)
            .subscribe(
                authModel => {
                    console.log(authModel);
                    this.authModel = authModel;
                },
                error => this.errorMessage = <any>error
            );
    }
}