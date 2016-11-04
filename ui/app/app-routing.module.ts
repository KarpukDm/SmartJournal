import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./component/signup/signup.component";
import {LoginComponent} from "./component/login/login.component";
import {JournalTemplateCreatorComponent} from "./component/journal-template/journal-template-creator.component";
import {JournalTemplateViewerComponent} from "./component/journal-template/journal-template-viewer-component";
import {JournalTemplateFinderComponent} from "./component/journal-template/journal-template-finder.component";
import {JournalTemplateEditorComponent} from "./component/journal-template/journal-template-editor.component";

const routes: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup',  component: SignUpComponent },
    { path: 'authenticate',  component: LoginComponent },
    { path: 'template/create',  component: JournalTemplateCreatorComponent },
    { path: 'template/view/:id',  component: JournalTemplateViewerComponent },
    { path: 'template',  component: JournalTemplateFinderComponent },
    { path: 'template/edit/:id',  component: JournalTemplateEditorComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}