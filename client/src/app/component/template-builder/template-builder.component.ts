import {Component, OnInit} from "@angular/core";
import {Template} from "../../model/template.model";
import {Layout} from "../../model/layout.model";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.css']
})
export class TemplateBuilderComponent implements OnInit {

  private template: Template;
  private layout: Layout;
  private selectedLayout: Layout;

  constructor() {
    this.template = new Template();
    this.layout = new Layout();
  }

  ngOnInit() {
  }

  private addLayout(layout: Layout) {

    if(isNullOrUndefined(layout)) {
      this.selectedLayout = layout;

      if (isNullOrUndefined(this.template.layouts)) {
        this.template.layouts = [];
      }

      if ((!isNullOrUndefined(this.layout.layoutName) || this.layout.layoutName != "") &&
        (!isNullOrUndefined(this.layout.layoutType) || this.layout.layoutType != "")) {
        if(isNullOrUndefined(this.selectedLayout.layouts)){
          this.selectedLayout.layouts = [];
        }
        this.selectedLayout.layouts.push(this.layout);
        this.layout = new Layout();
      }
    }
  }


  private getLayouts(){
    if(!isNullOrUndefined(this.template) && !isNullOrUndefined(this.template.layouts)) {
      return this.template.layouts;
    }
  }

}
