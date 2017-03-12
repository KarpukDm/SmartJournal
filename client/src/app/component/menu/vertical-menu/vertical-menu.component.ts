import {Component, OnInit} from "@angular/core";
import {Constrains} from "../../../constraints";
import {MenuElementModel} from "../menu-element.model";

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
    this.verticalMenu.push(new MenuElementModel("My templates", Constrains.myTemplatesPage));
    this.verticalMenu.push(new MenuElementModel("Create template", Constrains.createTemplatePage));
  }

  private getVerticalMenu(){
    return this.verticalMenu;
  }

}
