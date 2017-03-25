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
import {routerReducer, RouterStoreModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";
import {userReducer} from "./reducers/user.reducer";

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
    StoreModule.provideStore({routerReducer, userReducer}),
    RouterStoreModule.connectRouter()
  ],
  providers: [
    JournalService,
    LoginService,
    SignUpService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
