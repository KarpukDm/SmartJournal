import {Routes} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";

export const appRoutes: Routes = [
  { path: '', loadChildren: './modules/smart-journal/smart-journal.module#SmartJournalModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'logout', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'signUp', loadChildren: './modules/sign-up/sign-up.module#SignUpModule' }
];
