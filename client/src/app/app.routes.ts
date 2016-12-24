import {Routes} from "@angular/router";
import {AppComponent} from "./component/app/app.component";
import {TemplateCreatorComponent} from "./component/template-creator/template-creator.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'template/create', component: TemplateCreatorComponent },
];
