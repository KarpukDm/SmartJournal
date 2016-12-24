import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app/app.component';
import { TemplateCreatorComponent } from './component/template-creator/template-creator.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TemplateCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
