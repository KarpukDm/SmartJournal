import {Component, OnInit} from "@angular/core";
import {MenuElementModel} from "../menu-element.model";
import {Constrains} from "../../../constraints";

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  private group1: MenuElementModel[];

  private group2: MenuElementModel[];

  constructor() {
    this.group1 = [];
    this.group2 = [];
  }

  ngOnInit() {
    this.group1.push(new MenuElementModel("Profile", Constrains.profilePage));
    this.group1.push(new MenuElementModel("Journal", Constrains.journalPage));
    this.group1.push(new MenuElementModel("My academic plans", Constrains.myAcademicPlansPage));
    this.group1.push(new MenuElementModel("Statistics", Constrains.myJournalsPage));

    this.group2.push(new MenuElementModel("Create journal", Constrains.createJournalPage));
    this.group2.push(new MenuElementModel("Add disciplines", Constrains.addDisciplinesPage));
    this.group2.push(new MenuElementModel("Create academic plan", Constrains.createAcademicPlanPage));
  }

}
