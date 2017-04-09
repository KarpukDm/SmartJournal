import {Routes} from "@angular/router";
import {JournalBuilderComponent} from "../../pages/journal-builder/journal-builder.component";
import {JournalViewerComponent} from "../../pages/journal-viewer/journal-viewer.component";
import {JournalEditorComponent} from "../../pages/journal-editor/journal-editor.component";
import {JournalFillerComponent} from "../../pages/journal-filler/journal-filler.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {JournalComponent} from "../../pages/journal/journal.component";
import {MyTemplatesComponent} from "../../pages/my-templates/my-templates.component";

export const smartJournalRoutes: Routes = [
  { path: '', redirectTo: 'profile' },
  { path: 'journal', component: JournalComponent },
  { path: 'journal/create', component: JournalBuilderComponent },
  { path: 'journal/view/:id', component: JournalViewerComponent },
  { path: 'journal/edit/:id', component: JournalEditorComponent },
  { path: 'journal/fill/:id', component: JournalFillerComponent },
  { path: 'myJournals', component: MyTemplatesComponent },
  { path: 'profile', component: ProfileComponent },
];
