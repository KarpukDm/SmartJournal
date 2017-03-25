import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-carcass',
  templateUrl: './carcass.component.html',
  styleUrls: ['./carcass.component.css']
})
export class CarcassComponent implements OnInit {

  private isVisible: boolean;

  private publicPages: string[];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {

    this.publicPages = ['/login', '/signUp'];

    this.store
      .map(x => x.router)
      .filter(x => x.path)
      .subscribe(x => {
        this.isVisible = !this.publicPages.includes(x.path);
      });
  }
}
