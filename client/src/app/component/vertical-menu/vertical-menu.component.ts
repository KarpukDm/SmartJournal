import { Component, OnInit } from '@angular/core';
import {Constrains} from "../../constraints";

export class MenuElementModel{
  private name: string;
  private link: string;

  constructor(name: string, link: string){
    this.name = name;
    this.link = link;
  }
}

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  private verticalMenu: MenuElementModel[];
  private horizontalMenu: MenuElementModel[];

  constructor() {
    this.verticalMenu = [];
    this.horizontalMenu = [];
  }

  ngOnInit() {
    this.verticalMenu.push(new MenuElementModel("Create template", Constrains.createTemplateURL));
    this.verticalMenu.push(new MenuElementModel("My templates", Constrains.myTemplatesURL));

  }

  private getVerticalMenu(){
    return this.verticalMenu;
  }

  private getHorizontalMenu(){
    return this.horizontalMenu;
  }

}
