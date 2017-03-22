import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {VerticalMenuComponent} from "./component/menu/vertical-menu/vertical-menu.component";
import {HorizontalMenuComponent} from "./component/menu/horizontal-menu/horizontal-menu.component";
import {JournalComponent} from "./component/journal/journal.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {LoginComponent} from "./component/login/login.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {ModalComponent} from "./component/modal/modal.component";
import {JournalBuilderComponent} from "./component/journal-builder/journal-builder.component";
import {JournalViewerComponent} from "./component/journal-viewer/journal-viewer.component";
import {JournalFillerComponent} from "./component/journal-filler/journal-filler.component";
import {JournalEditorComponent} from "./component/journal-editor/journal-editor.component";

@NgModule({
  declarations: [
    AppComponent,
    JournalBuilderComponent,
    JournalViewerComponent,
    JournalEditorComponent,
    JournalFillerComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    JournalComponent,
    ProfileComponent,
    LoginComponent,
    SignUpComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, VerticalMenuComponent, HorizontalMenuComponent]
})
export class AppModule { }
