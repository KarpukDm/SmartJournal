import {Component, OnInit} from "@angular/core";
import {User} from "../../model/user.model";
import {SignUpService} from "../../service/sign-up.service";
import {SignUpModel} from "../../model/sign-up.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  private errorMessage: string;

  private email: string;

  private password: string;

  private user: User;

  constructor(private signUpService: SignUpService) { }

  ngOnInit() {
  }

  private signUp(){
    this.signUpService.signUp(new SignUpModel(this.email, this.password))
      .subscribe(
        user => {
          console.log(user);
          this.user = user;
        },
        error => this.errorMessage = <any>error
      );
  }

}
