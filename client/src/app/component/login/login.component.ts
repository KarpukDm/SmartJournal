import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../service/login.service";
import {LoginModel} from "../../model/login.model";
import {Observer} from "../../model/observer.model";

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

  private observer: Observer;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  private authenticate(){
    this.loginService.login(new LoginModel(this.login, this.password))
      .subscribe(
        observer => {
          console.log(observer);
          this.observer = observer;
        },
        error => this.errorMessage = <any>error
      );
  }

}
