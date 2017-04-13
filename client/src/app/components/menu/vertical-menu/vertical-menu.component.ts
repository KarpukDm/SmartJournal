import {Component, OnInit} from "@angular/core";
import {MenuElementModel} from "../menu-element.model";
import {Constrains} from "../../../constraints";

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  private verticalMenu: MenuElementModel[];

  constructor() {
    this.verticalMenu = [];
  }

  ngOnInit() {
    this.verticalMenu.push(new MenuElementModel("Profile", Constrains.profilePage));
    this.verticalMenu.push(new MenuElementModel("Journal", Constrains.journalPage));
    this.verticalMenu.push(new MenuElementModel("My journals", Constrains.myJournalsPage));
    this.verticalMenu.push(new MenuElementModel("Create journal", Constrains.createJournalPage));
  }

  private getVerticalMenu(){
    return this.verticalMenu;
  }

}
