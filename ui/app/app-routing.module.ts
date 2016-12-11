import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./component/signup/signup.component";
import {LoginComponent} from "./component/login/login.component";
import {JournalTemplateCreatorComponent} from "./component/journal-template/journal-template-creator.component";
import {JournalTemplateViewerComponent} from "./component/journal-template/journal-template-viewer-component";
import {JournalTemplateFinderComponent} from "./component/journal-template/journal-template-finder.component";
import {JournalTemplateEditorComponent} from "./component/journal-template/journal-template-editor.component";
import {AppSettings} from "./constants/app.settings";
import {ProfileComponent} from "./component/profile/profile.component";

const routes: Routes = [
    { path: '', redirectTo: AppSettings.profileURL, pathMatch: 'full' },
    { path: AppSettings.signupURL,  component: SignUpComponent },
    { path: AppSettings.loginURL,  component: LoginComponent },
    { path: AppSettings.createTemplateURL,  component: JournalTemplateCreatorComponent },
    { path: AppSettings.viewTemplateURL + ':id',  component: JournalTemplateViewerComponent },
    { path: AppSettings.findTemplateURL,  component: JournalTemplateFinderComponent },
    { path: AppSettings.editTemplateURL + ':id',  component: JournalTemplateEditorComponent },
    { path: AppSettings.profileURL,  component: ProfileComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}