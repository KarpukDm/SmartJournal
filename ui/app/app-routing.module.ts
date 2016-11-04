import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./component/signup.component";
import {LoginComponent} from "./component/login.component";
import {JournalTemplateCreatorComponent} from "./component/journal-template-creator.component";

const routes: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup',  component: SignUpComponent },
    { path: 'authenticate',  component: LoginComponent },
    { path: 'template/create',  component: JournalTemplateCreatorComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}