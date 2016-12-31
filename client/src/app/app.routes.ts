import {Routes} from "@angular/router";
import {AppComponent} from "./component/app/app.component";
import {TemplateBuilderComponent} from "./component/template-builder/template-builder.component";
import {TemplateViewerComponent} from "./component/template-viewer/template-viewer.component";
import {TemplateEditorComponent} from "./component/template-editor/template-editor.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'template/create', component: TemplateBuilderComponent },
  { path: 'template/view/:id', component: TemplateViewerComponent },
  { path: 'template/edit/:id', component: TemplateEditorComponent }
];
