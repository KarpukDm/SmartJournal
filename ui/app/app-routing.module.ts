import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./component/signup.component";

const routes: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup',  component: SignUpComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}