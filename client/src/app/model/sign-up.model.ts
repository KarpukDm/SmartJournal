export class SignUpModel {

  private login: string;

  private password: string;

  constructor(email: string, password: string){
    this.login = email;
    this.password = password;
  }

}
