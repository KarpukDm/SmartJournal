import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {AuthService} from "../../services/auth.service";
import {IUserState} from "../../reducers/user.reducer";

@Component({
  selector: 'app-carcass',
  templateUrl: './carcass.component.html',
  styleUrls: ['./carcass.component.css']
})
export class CarcassComponent implements OnInit {

  private isVisible: boolean;

  constructor(private store: Store<IUserState>,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.isVisible = false;
    this.store
      .map(x => x.state)
      .subscribe(() => {
        this.isVisible = this.authService.isAuthorize();
        console.log(localStorage);
      });
  }
}
