import {Routes} from "@angular/router";
import {JournalBuilderComponent} from "../../pages/journal-builder/journal-builder.component";
import {JournalViewerComponent} from "../../pages/journal-viewer/journal-viewer.component";
import {JournalEditorComponent} from "../../pages/journal-editor/journal-editor.component";
import {JournalFillerComponent} from "../../pages/journal-filler/journal-filler.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {JournalComponent} from "../../pages/journal/journal.component";

export const smartJournalRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'journal', component: JournalComponent,  children: [
    { path: 'create', component: JournalBuilderComponent },
    { path: 'view/:id', component: JournalViewerComponent },
    { path: 'edit/:id', component: JournalEditorComponent },
    { path: 'fill/:id', component: JournalFillerComponent },
  ]},
  { path: 'profile', component: ProfileComponent },
];

/*
export const smartJournalRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'journal/create', component: JournalBuilderComponent },
  { path: 'journal/view/:id', component: JournalViewerComponent },
  { path: 'journal/edit/:id', component: JournalEditorComponent },
  { path: 'journal/fill/:id', component: JournalFillerComponent },
  { path: 'profile', component: ProfileComponent },
];
*/
