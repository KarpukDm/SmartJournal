import {Routes} from "@angular/router";
import {JournalBuilderComponent} from "../../pages/journal-builder/journal-builder.component";
import {JournalViewerComponent} from "../../pages/journal-viewer/journal-viewer.component";
import {JournalEditorComponent} from "../../pages/journal-editor/journal-editor.component";
import {JournalFillerComponent} from "../../pages/journal-filler/journal-filler.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {JournalComponent} from "../../pages/journal/journal.component";
import {MyJournalsComponent} from "../../pages/my-journals/my-journals.component";
import {DisciplineCreatorComponent} from "../../pages/discipline-creator/discipline-creator.component";
import {MyDisciplinesComponent} from "../../pages/my-disciplines/my-disciplines.component";
import {AcademicPlanCreatorComponent} from "../../pages/academic-plan-creator/academic-plan-creator.component";

export const smartJournalRoutes: Routes = [
  { path: '', redirectTo: 'profile' },
  { path: 'journal', component: JournalComponent },
  { path: 'journal/create', component: JournalBuilderComponent },
  { path: 'journal/view/:id', component: JournalViewerComponent },
  { path: 'journal/edit/:id', component: JournalEditorComponent },
  { path: 'journal/fill/:id', component: JournalFillerComponent },
  { path: 'statistics', component: MyJournalsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'discipline/create', component: DisciplineCreatorComponent },
  { path: 'discipline/my', component: MyDisciplinesComponent },
  { path: 'academicPlan', component: AcademicPlanCreatorComponent },
];
