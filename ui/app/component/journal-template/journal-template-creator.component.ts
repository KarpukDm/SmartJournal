import {Component} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateModel} from "../../dto/journal-template.model";
import {JournalTemplateService} from "../../service/journal-template.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'journal-template-creator',
    templateUrl: '../../resources/view/journal-template/journal-template-creator.component.html',
    styleUrls: [ '../../resources/css/journal-template-creator.component.css' ],
    providers: [JournalTemplateService]
})
export class JournalTemplateCreatorComponent {

    private template: JournalTemplateModel;
    private newTemplate: JournalTemplateModel;
    private templates: Array<JournalTemplateModel>;
    private index: number;
    private isSelected: boolean;
    private isDisplay: boolean;
    private errorMessage: string;
    private indexesSequence: number[];
    private displayType: string; //h2
    private currentType: string; //in input

    constructor(private router: Router,
                private journalTemplateService: JournalTemplateService){
        this.newTemplate = new JournalTemplateModel();
        this.index = 0;
        this.isSelected = true;
        this.isDisplay = false;
        this.indexesSequence = [];
        this.currentType = null;
        this.displayType = null;
    }

    private selectTemplate(index: number): void{
        console.log(this.currentType);
        console.log(this.displayType);
        this.index = index;
        this.isSelected = true;
        this.setCurrentType(index);
    }

    private displayChildren(index: number){
        this.indexesSequence.push(index);
        this.isDisplay = true;
        this.isSelected = false;
        this.setCurrentType(index);
    }

    private getTemplates(): JournalTemplateModel[]{

        if(this.indexesSequence.length == 0){
            if(this.template !== undefined && this.template != null) {
                this.displayType = this.template.type;
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
        this.displayType = t[0].type;

        return this.findTemplate(lastIndex, this.templates).child;
    }

    private createTemplate(): void{

        if(this.template !== undefined && this.template != null) {
            let searchedTemplate = this.findTemplate(this.index, this.templates);
            if (searchedTemplate != null) {
                if (searchedTemplate.child === undefined || searchedTemplate.child == null) {
                    searchedTemplate.child = [];
                }
                this.newTemplate.index = (searchedTemplate.index + 1) * 10 + searchedTemplate.child.length;
                this.newTemplate.child = [];
                searchedTemplate.child.push(this.newTemplate);
                if(this.currentType == null) {
                    this.currentType = this.newTemplate.type;
                }else{
                    this.newTemplate.type = this.currentType;
                }
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
        this.currentType = null;
        this.indexesSequence.pop();
        let lastIndex = this.indexesSequence.slice(-1)[0];
        this.setCurrentType(lastIndex);
    }

    private saveTemplate(): void{
        this.journalTemplateService.createTemplate(this.template)
            .subscribe(
                template => {
                    console.log(template);
                    this.template = template;
                    this.gotoViewTemplate(this.template.id);
                },
                error => this.errorMessage = <any>error
            );
    }

    private gotoViewTemplate(id: number): void {
        let link = ['/template/view', id];
        this.router.navigate(link);
    }

    private setCurrentType(index: number): void {

        if(index == null) {
            index = this.indexesSequence.slice(-1)[0];
        }
        let t = this.findTemplate(index, this.templates)
        this.currentType = null;
        if(t != null && t.child != null && t.child.length > 0) {
            this.currentType = t.child[0].type;
        }
    }
}