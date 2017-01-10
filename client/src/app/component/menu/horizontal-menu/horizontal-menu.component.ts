import { Component, OnInit } from '@angular/core';
import {MenuElementModel} from "../menu-element.model";
import {Constrains} from "../../../constraints";

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {

  private horizontalMenu: MenuElementModel[];

  constructor() {
    this.horizontalMenu = [];
  }

  ngOnInit() {
    this.horizontalMenu.push(new MenuElementModel("Menu", Constrains.createTemplateURL));
    this.horizontalMenu.push(new MenuElementModel("Menu", Constrains.myTemplatesURL));

  }

  private getHorizontalMenu(){
    return this.horizontalMenu;
  }
}
