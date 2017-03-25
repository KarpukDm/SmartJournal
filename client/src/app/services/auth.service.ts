import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  private tokenName: string;
  private sessionTime: number;

  constructor() {
    this.tokenName = 'x-auth-token';
    this.sessionTime = 2592000;
  }

  public isAuthorize(){
    let token = localStorage.getItem(this.tokenName);
    if(!token) return false;

    let tokenTime = localStorage.getItem(token);
    if(!tokenTime) return false;

    let currentTime = new Date().getTime();
    return currentTime - Number.parseInt(tokenTime) < this.sessionTime;
  }
}
