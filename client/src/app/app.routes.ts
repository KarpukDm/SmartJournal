import {Routes} from "@angular/router";
import {AppComponent} from "./component/app/app.component";
import {TemplateBuilderComponent} from "./component/template-builder/template-builder.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'template/create', component: TemplateBuilderComponent },
  { path: 'template/view/:id', component: TemplateBuilderComponent },
];
