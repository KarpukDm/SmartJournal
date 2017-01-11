import { Component, OnInit } from '@angular/core';
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
    this.verticalMenu.push(new MenuElementModel("Profile", Constrains.profileURL));
    this.verticalMenu.push(new MenuElementModel("Create template", Constrains.createTemplateURL));
    this.verticalMenu.push(new MenuElementModel("My templates", Constrains.myTemplatesURL));
  }

  private getVerticalMenu(){
    return this.verticalMenu;
  }

}
