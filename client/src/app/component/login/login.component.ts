import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../service/login.service";
import {LoginModel} from "../../model/login.model";
import {User} from "../../model/user.model";
import {Router} from "@angular/router";
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

  private user: User;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  private authenticate(){
    this.loginService.login(new LoginModel(this.login, this.password))
      .subscribe(
        user => {
          console.log(user);
          this.user = user;
          if(this.user){
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
