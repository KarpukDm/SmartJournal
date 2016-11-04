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
    private isDisplay: boolean;
    private errorMessage: string;
    private indexesSequence: number[];
    private currentType: string;

    constructor(private journalTemplateService: JournalTemplateService){
        this.newTemplate = new JournalTemplateModel();
        this.index = 0;
        this.isSelected = true;
        this.isDisplay = false;
        this.indexesSequence = [];
    }

    private selectTemplate(index: number): void{
        this.index = index;
        this.isSelected = true;
    }

    private displayChildren(index: number){
        this.indexesSequence.push(index);
        let t = this.findTemplate(this.indexesSequence.slice(-1)[0], this.templates);
        if(t != null){
            this.currentType = t.type;
        }
        this.isDisplay = true;
        this.isSelected = false;
    }

    private getTemplates(): JournalTemplateModel[]{

        if(this.indexesSequence.length == 0){
            if(this.template !== undefined && this.template != null) {
                this.currentType = this.template.type;
            }
            return this.templates;
        }

        let lastIndex = this.indexesSequence.slice(-1)[0];
        let children = this.findTemplate(lastIndex, this.templates).child;

        if(children === undefined || children.length == 0){
            //  показать сообщение об отсутствии дочерних шаблонов
            this.goBack();
            return this.getTemplates();
        }
        let t = this.findTemplate(lastIndex, this.templates).child;
        this.currentType = t[0].type;
        return this.findTemplate(lastIndex, this.templates).child;
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
                let temp = this.findTemplate(index, i.child);
                if(temp != null){
                    return temp;
                }
            }
        }

        return null;
    }

    private goBack(): void {
        this.indexesSequence.pop();
    }

    private saveTemplate(): void{
        this.journalTemplateService.createTemplate(this.template)
            .subscribe(
                template => {
                    this.template = template;
                },
                error => this.errorMessage = <any>error
            );
    }
}