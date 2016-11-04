import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./component/app.component";
import {SignUpComponent} from "./component/signup.component";
import {SignUpService} from "./service/signup.service";
import {LoginComponent} from "./component/login.component";
import {JournalTemplateCreatorComponent} from "./component/journal-template-creator.component";

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
        JournalTemplateCreatorComponent
    ],
    providers: [ SignUpService, LoginComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }