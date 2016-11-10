import {Injectable} from "@angular/core";
import "../../rxjs-extensions";
import {JournalTemplateModel} from "../../dto/journal-template.model";

@Injectable()
export class JournalTemplateManagerService {

    constructor() {
    }

    findTemplate(index: number, templates: JournalTemplateModel[]): JournalTemplateModel {
        for (let i of templates) {
            if (i.index == index) {
                return i;
            }

            if (i.child !== undefined || i.child != null) {
                let temp = this.findTemplate(index, i.child);
                if (temp != null) {
                    return temp;
                }
            }
        }
        return null;
    }
}