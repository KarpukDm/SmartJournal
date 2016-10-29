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
    private parentTemplate: JournalTemplateModel;
    private newTemplate: JournalTemplateModel;
    private indexes: number[];
    errorMessage: string;

    constructor(private journalTemplateService: JournalTemplateService){
        this.journalTemplate = new JournalTemplateModel();
        this.parentTemplate = new JournalTemplateModel();
        this.newTemplate = new JournalTemplateModel();
    }

    private createBaseTemplate(journalTemplate: JournalTemplateModel): void{

        this.journalTemplate = journalTemplate;
        this.journalTemplate.index = [];
        this.journalTemplate.index.push(0);
        this.journalTemplateService.createTemplate(this.journalTemplate)
            .subscribe(
                journalTemplate => {
                    this.journalTemplate = journalTemplate;
                },
                error => this.errorMessage = <any>error
            );
    }

    private createNewTemplate(journalTemplate: JournalTemplateModel): void{

        this.indexes = journalTemplate.index;
        this.newTemplate = journalTemplate;
        this.journalTemplate.child = this.createNewLevel(this.journalTemplate, 0);

        this.journalTemplateService.createTemplate(this.journalTemplate)
            .subscribe(
                journalTemplate => {
                    this.journalTemplate = journalTemplate;
                },
                error => this.errorMessage = <any>error
            );
    }

    private createNewLevel(journalTemplate: JournalTemplateModel, level: number): JournalTemplateModel[]{
        if(level === this.indexes.length){
            this.newTemplate.index.push(0);
            journalTemplate.child.push(this.newTemplate);
            return journalTemplate.child;
        }

        journalTemplate.child = this.createNewLevel(journalTemplate.child[this.indexes[level]], level + 1);
    }
}