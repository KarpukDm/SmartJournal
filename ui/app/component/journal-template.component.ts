import {Component} from "@angular/core";
import "../rxjs-extensions";
import {JournalTemplateModel} from "../dto/journal-template.model";
import {JournalTemplateService} from "../service/journal-template.service";

@Component({
    moduleId: module.id,
    selector: 'journal-template',
    templateUrl: '../resources/view/journal-template.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [JournalTemplateService]
})
export class JournalTemplateComponent {

    private journalTemplate: JournalTemplateModel;
    private errorMessage: string;

    constructor(private journalTemplateService: JournalTemplateService){
        this.journalTemplate = new JournalTemplateModel();
    }

    private creatTemplate(journalTemplate: JournalTemplateModel): void{

        console.log(journalTemplate);
    }

    private createNewLevel(journalTemplate: JournalTemplateModel, level: number): JournalTemplateModel[]{
        if(journalTemplate.index === undefined){
            return journalTemplate.child;
        }

        //journalTemplate.child = this.createNewLevel(journalTemplate.child[this.indexes[level]], level + 1);
    }
}