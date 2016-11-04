import {Component} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template.service";

@Component({
    moduleId: module.id,
    selector: 'journal-template-viewer',
    templateUrl: '../../resources/view/journal-template/journal-template-viewer.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [JournalTemplateService]
})
export class JournalTemplateViewerComponent {

}