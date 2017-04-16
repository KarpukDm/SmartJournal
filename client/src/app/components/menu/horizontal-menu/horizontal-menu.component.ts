import {Component, OnInit} from "@angular/core";
import {MenuElementModel} from "../menu-element.model";
import {Constrains} from "../../../constraints";
import {LoginService} from "../../../services/login.service";
import {Store} from "@ngrx/store";
import {AUTHORIZED} from "../../../reducers/user.reducer";

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {

  private horizontalMenu: MenuElementModel[];
  private isAuthorize: boolean;

  constructor(private loginService: LoginService,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.isAuthorize = false;
    this.store
      .select(x => x.userReducer)
      .subscribe((x) => {
      console.log(x);
        this.isAuthorize = x === AUTHORIZED;
        this.horizontalMenu = [];
        if (!this.isAuthorize) {
          this.horizontalMenu.push(new MenuElementModel("Login", Constrains.loginPage));
          this.horizontalMenu.push(new MenuElementModel("Sign up", Constrains.signUpPage));
        }
      });
  }

  private getHorizontalMenu() {
    return this.horizontalMenu;
  }

  logout() {
    this.loginService.logout()
      .subscribe(() => {
      })
  }
}
