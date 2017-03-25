import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {go} from "@ngrx/router-store";
import {Constrains} from "../../constraints";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(go([Constrains.profilePage]));
  }

}
