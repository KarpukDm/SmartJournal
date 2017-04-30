import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {JournalBuilderComponent} from "./journal-builder/journal-builder.component";
import {JournalEditorComponent} from "./journal-editor/journal-editor.component";
import {JournalFillerComponent} from "./journal-filler/journal-filler.component";
import {JournalViewerComponent} from "./journal-viewer/journal-viewer.component";
import {ProfileComponent} from "./profile/profile.component";
import {JournalComponent} from "./journal/journal.component";
import {ComponentsLibraryModule} from "../components/components-library.module";
import {MyJournalsComponent} from './my-journals/my-journals.component';
import {DisciplineCreatorComponent} from './discipline-creator/discipline-creator.component';
import {AcademicPlanComponent} from './academic-plan/academic-plan.component';
import {MyDisciplinesComponent} from "./my-disciplines/my-disciplines.component";

export const DIRECTIVES = [
  JournalComponent,
  JournalBuilderComponent,
  JournalEditorComponent,
  JournalFillerComponent,
  JournalViewerComponent,
  ProfileComponent,
  MyJournalsComponent,
  DisciplineCreatorComponent,
  MyDisciplinesComponent,
  AcademicPlanComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsLibraryModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class PageListModule {
}
