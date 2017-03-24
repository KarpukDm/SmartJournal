import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private store: AppState) { }

  ngOnInit() {
    this.store.router.path = this.router.url;
  }

}
