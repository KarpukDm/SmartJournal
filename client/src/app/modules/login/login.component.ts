import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {UserModel} from "../../models/user.model";
import {LoginModel} from "../../models/login.model";
import {Constrains} from "../../constraints";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private errorMessage: string;

  private login: string;

  private password: string;

  private account: UserModel;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  private authenticate(){
    this.loginService.login(new LoginModel(this.login, this.password))
      .subscribe(
        user => {
          console.log(user);
          this.account = user;
          if(this.account){
            this.gotoProfile();
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
