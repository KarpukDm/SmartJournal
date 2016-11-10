import {Component} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template/journal-template.service";
import {Router} from "@angular/router";

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

    constructor( private router: Router,
                 private journalTemplateService: JournalTemplateService){
        this.type = null;
    }

    gotoViewTemplate(id: number): void {
        let link = ['/template/view', id];
        this.router.navigate(link);
    }

    private getTemplates(){

        console.log(this.type);
        this.journalTemplateService.getTemplatesByType(this.type)
            .subscribe(
                templates => {
                    console.log(templates);
                    this.templates = templates;
                },
                error => this.errorMessage = <any>error
            );
    }
}