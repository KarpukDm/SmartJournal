import {Component} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template.service";

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: '../../resources/view/profile/profile.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [JournalTemplateService]
})
export class ProfileComponent {

}