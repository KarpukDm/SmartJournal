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
    private errorMessage: string;

    constructor(private journalTemplateService: JournalTemplateService){
        this.newTemplate = new JournalTemplateModel();
    }

    private createTemplate(index: number): void{

        if(this.template !== undefined) {

            if(this.templates === undefined || this.templates == null) {
                this.templates = [this.template];
            }

            let searchedTemplate = this.findTemplate(index, this.templates);
            if (searchedTemplate != null) {
                if (searchedTemplate.child === undefined || searchedTemplate.child == null) {
                    searchedTemplate.child = [];
                }
                if(this.newTemplate.child === undefined || this.newTemplate.child == null){
                    this.newTemplate.child = [];
                }
                this.newTemplate.index = (searchedTemplate.index + 1) * 10 + this.newTemplate.child.length;
                searchedTemplate.child.push(this.newTemplate);
                this.newTemplate = new JournalTemplateModel();
            }
        }
        else{
            this.newTemplate.index = 0;
            this.newTemplate.child = [];
            this.template = this.newTemplate;
            this.newTemplate = new JournalTemplateModel();
        }

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