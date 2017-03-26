import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {AppComponent} from "./app.component";
import {JournalService} from "./services/journal.service";
import {LoginService} from "./services/login.service";
import {SignUpService} from "./services/sign-up.service";
import {ComponentsLibraryModule} from "./components/components-library.module";
import {RouterStoreModule, routerReducer} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ComponentsLibraryModule,
    StoreModule.provideStore({ router: routerReducer }),
    RouterStoreModule.connectRouter()
  ],
  providers: [
    JournalService,
    LoginService,
    SignUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
