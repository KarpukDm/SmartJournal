import {Component} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template.service";

@Component({
    moduleId: module.id,
    selector: 'journal-template-finder',
    templateUrl: '../../resources/view/journal-template/journal-template-finder.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [JournalTemplateService]
})
export class JournalTemplateFinderComponent {

    private type;
    private errorMessage;
    private templates;

    constructor(private journalTemplateService: JournalTemplateService){
        this.type = null;
    }

    private getTemplates(){

        console.log(this.type);
        this.journalTemplateService.getTemplates(this.type)
            .subscribe(
                templates => {
                    console.log(templates);
                    this.templates = templates;
                },
                error => this.errorMessage = <any>error
            );
    }
}