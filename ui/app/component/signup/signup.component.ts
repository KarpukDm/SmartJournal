import {Component} from "@angular/core";
import {UserModel} from "../../dto/user.model";
import {SignUpService} from "../../service/signup.service";
import {SignUpModel} from "../../dto/signup.model";
import "../../rxjs-extensions";

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: '../../resources/view/signup/signup.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [SignUpService]
})
export class SignUpComponent {
    userModel: UserModel;
    signUpModel: SignUpModel;
    errorMessage: string;

    constructor(private signUpService: SignUpService) {
        this.userModel = new UserModel();
        this.signUpModel = {
            name: "useruser",
            email: "karpukdm@yandex.ru",
            password: "1111111",
            repeatedPassword: "1111111"
        };
    }

    signUp(): void {
        this.signUpService.createUser(this.signUpModel)
            .subscribe(
                userModel => {
                    console.log(userModel);
                    this.userModel = userModel;
                },
                error => this.errorMessage = <any>error
            );
    }
}