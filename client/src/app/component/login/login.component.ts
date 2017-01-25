import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../service/login.service";
import {LoginModel} from "../../model/login.model";
import {User} from "../../model/user.model";

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

  private user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  private authenticate(){
    this.loginService.login(new LoginModel(this.login, this.password))
      .subscribe(
        user => {
          console.log(user);
          this.user = user;
        },
        error => this.errorMessage = <any>error
      );
  }

}
