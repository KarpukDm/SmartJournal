import {Component, OnInit} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template/journal-template.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {JournalTemplateManagerService} from "../../service/journal-template/journal-template-manager.service";
import {JournalTemplateModel} from "../../dto/journal-template.model";
import {Location} from "@angular/common";
import {AppSettings} from "../../constants/app.settings";
import {AtomModel} from "../../dto/atom.model";

@Component({
    moduleId: module.id,
    selector: 'journal-template-editor',
    templateUrl: '../../resources/view/journal-template/journal-template-editor.component.html',
    styleUrls: ['../../resources/css/journal-template-creator.component.css'],
    providers: [JournalTemplateService, JournalTemplateManagerService]
})
export class JournalTemplateEditorComponent implements OnInit {

    private templates: Array<JournalTemplateModel>;
    private selectedTemplate    : JournalTemplateModel;
    private errorMessage: string;
    private indexesSequence: number[];
    private displayType: string;
    private isSelected: boolean;
    private atoms: Array<AtomModel>;
    private isLastElement: boolean;
    private currentIndex: number;

    constructor(private location: Location,
                private router: Router,
                private route: ActivatedRoute,
                private journalTemplateService: JournalTemplateService,
                private templateManager: JournalTemplateManagerService) {
        this.indexesSequence = [];
        this.atoms = [];
        this.isLastElement = false;
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

    private initArray(index: number): void {
        let number = 10;
        let t = this.templateManager.findTemplate(index, this.templates);
        for (let i = 0; i < number; i++) {
            if(t.atoms.length < i || t.atoms[i] === undefined){
                this.atoms.push(new AtomModel());
            }else{
                this.atoms[i] = t.atoms[i];
            }
        }
    }

    private addAtoms(): void {
        let t = this.templateManager.findTemplate(this.currentIndex, this.templates);
        if(t.atoms == null || t.atoms === undefined){
            t.atoms = [];
        }

        for(let atom of this.atoms){
            if(atom.firstName != null && atom.firstName !== "" &&
            atom.lastName != null && atom.lastName !== "" &&
            atom.middleName != null && atom.middleName !== ""){
                t.atoms.push(atom);
            }
        }
    }

    private addPlaceForAtom(): void {
        this.atoms.push(new AtomModel());
    }

    private displayChildren(index: number) {
        this.indexesSequence.push(index);
        this.initArray(index);
        let t = this.templateManager.findTemplate(index, this.templates);
        this.isLastElement = t.child == null || t.child.length == 0;
        this.currentIndex = index;
    }

    private selectTemplate(index: number): void {
        this.selectedTemplate = this.templateManager.findTemplate(index, this.templates);
        this.isSelected = true;
    }

    private save(): void {
        this.isSelected = false;
    }

    private getTemplates(): JournalTemplateModel[] {

        if (this.indexesSequence.length == 0) {
            if (this.templates !== undefined && this.templates != null) {
                this.displayType = this.templates[0].type;
            }
            return this.templates;
        }

        let lastIndex = this.indexesSequence.slice(-1)[0];
        let children = this.templateManager.findTemplate(lastIndex, this.templates).child;

        if (children === undefined || children.length == 0) {
            //  показать сообщение об отсутствии дочерних шаблонов
            this.goUp();
            return this.getTemplates();
        }
        let t = this.templateManager.findTemplate(lastIndex, this.templates).child;
        this.displayType = t[0].type;

        return this.templateManager.findTemplate(lastIndex, this.templates).child;
    }

    private goUp(): void {
        this.indexesSequence.pop();
    }

    private saveTemplate(): void {
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
        let link = [AppSettings.viewTemplateURL, id];
        this.router.navigate(link);
    }

    goBack(): void {
        this.location.back();
    }
}