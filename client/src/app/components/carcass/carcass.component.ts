import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {AuthService} from "../../services/auth.service";
import {UserState} from "../../reducers/user.reducer";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-carcass',
  templateUrl: './carcass.component.html',
  styleUrls: ['./carcass.component.css']
})
export class CarcassComponent implements OnInit {

  private isAuthorized: boolean;
  private isPublicPage: boolean;
  private publicPages: string[];

  constructor(private authService: AuthService,
              private store: Store<any>) {
  }

  ngOnInit() {

    this.publicPages = ['/login', '/signUp'];

    this.isAuthorized = false;
    this.store
      .select(x => x.userReducer)
      .map(x => x.state)
      .subscribe(() => {
        this.isAuthorized = this.authService.isAuthorize();
        console.log(localStorage);
      });

    this.store
      .select(x => x.routerReducer)
      .map(x => x.path)
      .subscribe(x => {
        console.log(x);
        this.isPublicPage = this.publicPages.includes(x);
      });
  }
}
