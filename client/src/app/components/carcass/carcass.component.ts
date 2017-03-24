import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carcass',
  templateUrl: './carcass.component.html',
  styleUrls: ['./carcass.component.css']
})
export class CarcassComponent implements OnInit {

  private isVisible: boolean;

  private pages: string[];

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.pages = ['/login', '/signUp'];

    console.log(this.router.url);
    this.isVisible = true;
    console.log(this.isVisible );
  }
}
