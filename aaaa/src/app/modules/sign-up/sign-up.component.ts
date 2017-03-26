import {Component, OnInit} from "@angular/core";
import {SignUpService} from "../../services/sign-up.service";
import {LoginService} from "../../services/login.service";
import {Constrains} from "../../constraints";
import {Router} from "@angular/router";
import {UserModel} from "../../models/user.model";
import {SignUpModel} from "../../models/sign-up.model";
import {LoginModel} from "../../models/login.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService, LoginService]
})
export class SignUpComponent implements OnInit {

  private errorMessage: string;

  private email: string;

  private password: string;

  private user: UserModel;

  constructor(private signUpService: SignUpService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  private signUp() {
    this.signUpService.signUp(new SignUpModel(this.email, this.password))
      .subscribe(
        user => {
          console.log(user);
          this.user = user;
          if (this.user) {
            this.loginService.login(new LoginModel(this.email, this.password))
              .subscribe(x => {
                if(x){
                  this.gotoProfile();
                }
              })
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  private gotoProfile(): void {
    let link = [Constrains.profilePage];
    this.router.navigate(link);
  }

}
