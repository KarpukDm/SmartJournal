import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {smartJournalRoutes} from "./smart-journal.routes";
import {SmartJournalComponent} from "./smart-journal.component";
import {ComponentsLibraryModule} from "../../components/components-library.module";
import {PageListModule} from "../../pages/page-list.module";

@NgModule({
  imports: [
    RouterModule.forChild(smartJournalRoutes),
    ComponentsLibraryModule,
    PageListModule
  ],
  declarations: [
    SmartJournalComponent
  ],
  bootstrap: [SmartJournalComponent]
})
export class SmartJournalModule {}
