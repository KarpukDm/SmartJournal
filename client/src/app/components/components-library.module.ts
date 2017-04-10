import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VerticalMenuComponent} from "./menu/vertical-menu/vertical-menu.component";
import {HorizontalMenuComponent} from "./menu/horizontal-menu/horizontal-menu.component";
import {ModalComponent} from "./modal/modal.component";
import {FormsModule} from "@angular/forms";
import {CarcassComponent} from "./carcass/carcass.component";
import {MultipleValueAxesComponent} from "./statistics/multiple-value-axes/multiple-value-axes.component";

export const DIRECTIVES = [
  VerticalMenuComponent,
  HorizontalMenuComponent,
  ModalComponent,
  CarcassComponent,
  MultipleValueAxesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...DIRECTIVES,
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class ComponentsLibraryModule {
}
