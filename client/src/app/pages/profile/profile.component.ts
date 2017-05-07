import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {go} from "@ngrx/router-store";
import {Constrains} from "../../constraints";
import {AppState} from "../../app.state";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profileName: string;

  constructor(private router: Router,
              private profileService: ProfileService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(go([Constrains.profilePage]));

    this.profileService.getAccount()
      .subscribe(profile => this.profileName = profile);
  }

}
