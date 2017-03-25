import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import { go, replace, search, show, back, forward } from '@ngrx/router-store';
import {Constrains} from "../../constraints";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(go([Constrains.profilePage]));
  }

}
