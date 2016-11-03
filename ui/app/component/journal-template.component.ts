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

    private template: JournalTemplateModel;
    private newTemplate: JournalTemplateModel;
    private templates: Array<JournalTemplateModel>;
    private index: number;
    private isSelected: boolean;
    private errorMessage: string;

    constructor(private journalTemplateService: JournalTemplateService){
        this.newTemplate = new JournalTemplateModel();
        this.index = 0;
        this.isSelected = true;
    }

    private selectTemplate(index: number): void{
        this.index = index;
        this.isSelected = true;
    }

    private createTemplate(): void{

        if(this.template !== undefined) {
            let searchedTemplate = this.findTemplate(this.index, this.templates);
            if (searchedTemplate != null) {
                if (searchedTemplate.child === undefined || searchedTemplate.child == null) {
                    searchedTemplate.child = [];
                }
                this.newTemplate.index = (searchedTemplate.index + 1) * 10 + searchedTemplate.child.length;
                searchedTemplate.child.push(this.newTemplate);
                this.newTemplate = new JournalTemplateModel();
            }
        }
        else{
            this.newTemplate.index = 0;
            this.newTemplate.child = [];
            this.template = this.newTemplate;
            this.newTemplate = new JournalTemplateModel();

            if(this.templates === undefined || this.templates == null) {
                this.templates = [this.template];
            }
        }
        this.isSelected = false;
        console.log(this.template);
    }

    private findTemplate(index: number, templates: JournalTemplateModel[]): JournalTemplateModel{

        for(let i of templates){
            if(i.index == index){
                return i;
            }

            if(i.child !== undefined || i.child != null){
                this.findTemplate(index, i.child);
            }
        }

        return null;
    }
}