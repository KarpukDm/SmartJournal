import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./component/app.component";
import {SignUpComponent} from "./component/signup/signup.component";
import {SignUpService} from "./service/signup.service";
import {LoginComponent} from "./component/login/login.component";
import {JournalTemplateCreatorComponent} from "./component/journal-template/journal-template-creator.component";
import {JournalTemplateViewerComponent} from "./component/journal-template/journal-template-viewer-component";
import {JournalTemplateFinderComponent} from "./component/journal-template/journal-template-finder.component";
import {JournalTemplateEditorComponent} from "./component/journal-template/journal-template-editor.component";
import {MDL} from "./component/mdl";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        SignUpComponent,
        LoginComponent,
        JournalTemplateCreatorComponent,
        JournalTemplateViewerComponent,
        JournalTemplateFinderComponent,
        JournalTemplateEditorComponent,
        MDL
    ],
    providers: [ MDL ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }