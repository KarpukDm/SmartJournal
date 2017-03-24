import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  { path: '', loadChildren: './modules/smart-journal/smart-journal.module#SmartJournalModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'signUp', loadChildren: './modules/sign-up/sign-up.module#SignUpModule' }
];
