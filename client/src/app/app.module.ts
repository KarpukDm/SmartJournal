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
import {StatisticsService} from "./services/statistics.service";
import {studentInfoReducer} from "./reducers/sudent-info.reducer";
import {DisciplineService} from "./services/discipline.service";
import {AcademicPlanService} from "./services/academic-plan.service";
import {ProfileService} from "./services/profile.service";
import {lessonTypeReducer} from "./reducers/lesson-type.reducer";

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
    StoreModule.provideStore({routerReducer, userReducer, studentInfoReducer, lessonTypeReducer}),
    RouterStoreModule.connectRouter()
  ],
  providers: [
    JournalService,
    LoginService,
    SignUpService,
    AuthGuard,
    AuthService,
    StatisticsService,
    DisciplineService,
    AcademicPlanService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
