import {Component, OnInit} from "@angular/core";
import {MenuElementModel} from "../menu-element.model";
import {Constrains} from "../../../constraints";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  private group1: MenuElementModel[];

  private group2: MenuElementModel[];

  private activePage: string;

  constructor(private store: Store<any>) {
    this.group1 = [];
    this.group2 = [];
  }

  ngOnInit() {
    this.group1.push(new MenuElementModel("Profile", Constrains.profilePage));
    this.group1.push(new MenuElementModel("Journal", Constrains.journalPage));
    this.group1.push(new MenuElementModel("Academic plan", Constrains.createAcademicPlanPage));
    this.group1.push(new MenuElementModel("Add disciplines", Constrains.addDisciplinesPage));
    this.group1.push(new MenuElementModel("Create journal", Constrains.createJournalPage));
    this.group1.push(new MenuElementModel("Journal management", Constrains.statistics));

    this.store
      .select(x => x.routerReducer)
      .map(x => x.path)
      .subscribe(x => {
        console.log(x);
        this.activePage = x;
        console.log(this.group1[0].link);
      });
  }

}
