import { Component, OnInit } from '@angular/core';
import {Constrains} from "../../constraints";

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  private map: Object;
  private listMenu: string[];

  constructor() {
    this.map = {};
    this.listMenu = [];
  }

  ngOnInit() {
    this.listMenu.push("Create template");
    this.map[this.listMenu.slice(-1)[0]] = Constrains.createTemplateURL;

    this.listMenu.push("My templates");
    this.map[this.listMenu.slice(-1)[0]] = Constrains.myTemplatesURL;
  }

  private getMenu(){
    return this.listMenu;
  }

}
