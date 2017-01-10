import { Component, OnInit } from '@angular/core';
import {Constrains} from "../../constraints";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private map: Object;
  private verticalMenu: string[];

  constructor() {
    this.map = {};
    this.verticalMenu = [];
  }

  ngOnInit() {
    this.verticalMenu.push("Create template");
    this.map[this.verticalMenu.slice(-1)[0]] = Constrains.createTemplateURL;

    this.verticalMenu.push("My templates");
    this.map[this.verticalMenu.slice(-1)[0]] = Constrains.myTemplatesURL;
  }

  private getVerticalMenu(){
    return this.verticalMenu;
  }

}
