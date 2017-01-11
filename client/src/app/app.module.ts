import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app/app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MDL} from "./mdl";
import { TemplateBuilderComponent } from './component/template-builder/template-builder.component';
import { TemplateViewerComponent } from './component/template-viewer/template-viewer.component';
import { TemplateEditorComponent } from './component/template-editor/template-editor.component';
import { TemplateFillerComponent } from './component/template-filler/template-filler.component';
import { VerticalMenuComponent } from './component/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './component/menu/horizontal-menu/horizontal-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MDL,
    TemplateBuilderComponent,
    TemplateViewerComponent,
    TemplateEditorComponent,
    TemplateFillerComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, VerticalMenuComponent]
})
export class AppModule { }
