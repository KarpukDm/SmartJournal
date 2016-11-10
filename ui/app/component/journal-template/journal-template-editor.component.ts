import {Component, OnInit} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template/journal-template.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {JournalTemplateManagerService} from "../../service/journal-template/journal-template-manager.service";
import {JournalTemplateModel} from "../../dto/journal-template.model";

@Component({
    moduleId: module.id,
    selector: 'journal-template-editor',
    templateUrl: '../../resources/view/journal-template/journal-template-editor.component.html',
    styleUrls: [ '../../resources/css/journal-template-creator.component.css' ],
    providers: [JournalTemplateService, JournalTemplateManagerService]
})
export class JournalTemplateEditorComponent implements OnInit {

    private templates: Array<JournalTemplateModel>;
    private selectedTemplate: JournalTemplateModel;
    private errorMessage: string;
    private indexesSequence: number[];
    private displayType: string;
    private isSelected: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private journalTemplateService: JournalTemplateService,
        private templateManager: JournalTemplateManagerService) {
        this.indexesSequence = [];
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.journalTemplateService.getTemplatesByIndex(id)
                .subscribe(
                    templates => {
                        console.log(templates);
                        this.templates = templates;
                    },
                    error => this.errorMessage = <any>error
                );
        });
    }

    private displayChildren(index: number){
        this.indexesSequence.push(index);
    }

    private selectTemplate(index: number): void {
        this.selectedTemplate = this.templateManager.findTemplate(index, this.templates);
        this.isSelected = true;
    }

    private save(): void{
        this.isSelected = false;
    }

    private getTemplates(): JournalTemplateModel[]{

        if(this.indexesSequence.length == 0){
            if(this.templates !== undefined && this.templates != null) {
                this.displayType = this.templates[0].type;
            }
            return this.templates;
        }

        let lastIndex = this.indexesSequence.slice(-1)[0];
        let children = this.templateManager.findTemplate(lastIndex, this.templates).child;

        if(children === undefined || children.length == 0){
            //  показать сообщение об отсутствии дочерних шаблонов
            this.goBack();
            return this.getTemplates();
        }
        let t = this.templateManager.findTemplate(lastIndex, this.templates).child;
        this.displayType = t[0].type;

        return this.templateManager.findTemplate(lastIndex, this.templates).child;
    }

    private goBack(): void {
        this.indexesSequence.pop();
    }

    private saveTemplate(): void{
        this.journalTemplateService.createTemplate(this.templates[0])
            .subscribe(
                template => {
                    console.log(template);
                    this.templates[0] = template;
                    this.gotoViewTemplate(this.templates[0].id);
                },
                error => this.errorMessage = <any>error
            );
    }

    gotoViewTemplate(id: number): void {
        let link = ['/template/view', id];
        this.router.navigate(link);
    }
}