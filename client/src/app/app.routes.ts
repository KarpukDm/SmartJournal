import {Routes} from "@angular/router";
import {AppComponent} from "./component/app/app.component";
import {TemplateBuilderComponent} from "./component/template-builder/template-builder.component";
import {TemplateViewerComponent} from "./component/template-viewer/template-viewer.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'template/create', component: TemplateBuilderComponent },
  { path: 'template/view/:id', component: TemplateViewerComponent },
];
