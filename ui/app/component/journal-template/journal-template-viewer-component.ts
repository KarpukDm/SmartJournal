import {Component, OnInit} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateService} from "../../service/journal-template.service";
import {JournalTemplateModel} from "../../../dist/app/dto/journal-template.model";
import {Params, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'journal-template-viewer',
    templateUrl: '../../resources/view/journal-template/journal-template-viewer.component.html',
    //styleUrls: [ '../resources/css/signup.component.css' ],
    providers: [JournalTemplateService]
})
export class JournalTemplateViewerComponent implements OnInit {

    private templates: Array<JournalTemplateModel>;
    private errorMessage: string;
    private indexesSequence: number[];
    private displayType: string;

    constructor(
        private route: ActivatedRoute,
        private journalTemplateService: JournalTemplateService) {

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

    private getTemplates(): JournalTemplateModel[]{

        if(this.indexesSequence.length == 0){
            if(this.templates !== undefined && this.templates != null) {
                this.displayType = this.templates[0].type;
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
}