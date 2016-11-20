import {Component, OnInit} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template/journal-template.service";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {JournalTemplateManagerService} from "../../service/journal-template/journal-template-manager.service";
import {JournalTemplateModel} from "../../dto/journal-template.model";
import {Location} from "@angular/common";
import {AppSettings} from "../../constants/app.settings";
import {AtomModel} from "../../dto/atom.model";

@Component({
    moduleId: module.id,
    selector: 'journal-template-viewer',
    templateUrl: '../../resources/view/journal-template/journal-template-viewer.component.html',
    styleUrls: ['../../resources/css/journal-template-creator.component.css'],
    providers: [JournalTemplateService, JournalTemplateManagerService]
})
export class JournalTemplateViewerComponent implements OnInit {

    private templates: Array<JournalTemplateModel>;
    private errorMessage: string;
    private indexesSequence: number[];
    private displayType: string;
    private isLastElement: boolean;
    private atoms: AtomModel[];

    constructor(private location: Location,
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

    private displayChildren(index: number) {
        this.indexesSequence.push(index);
        let t = this.templateManager.findTemplate(index, this.templates);
        this.isLastElement = t.child == null || t.child.length == 0;
        if(this.isLastElement == true){
            this.atoms = t.atoms;
        }
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
        let template = this.templateManager.findTemplate(lastIndex, this.templates).child;
        this.displayType = template[0].type;

        return template;
    }

    private goUp(): void {
        this.indexesSequence.pop();
    }

    gotoEditTemplate(id: number): void {
        let link = [AppSettings.editTemplateURL, id];
        this.router.navigate(link);
    }

    goBack(): void {
        this.location.back();
    }
}