import {Routes} from "@angular/router";
import {AppComponent} from "./component/app/app.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {JournalComponent} from "./component/journal/journal.component";
import {LoginComponent} from "./component/login/login.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {JournalBuilderComponent} from "./component/journal-builder/journal-builder.component";
import {JournalViewerComponent} from "./component/journal-viewer/journal-viewer.component";
import {JournalEditorComponent} from "./component/journal-editor/journal-editor.component";
import {JournalFillerComponent} from "./component/journal-filler/journal-filler.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'journal/create', component: JournalBuilderComponent },
  { path: 'journal/view/:id', component: JournalViewerComponent },
  { path: 'journal/edit/:id', component: JournalEditorComponent },
  { path: 'journal/fill/:id', component: JournalFillerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent }
];
