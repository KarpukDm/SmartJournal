import {AtomModel} from "./atom.model";
export class JournalTemplateModel {
    templateName: string;
    type: string;
    password: string;
    index: number;
    child: JournalTemplateModel[];
    atoms: AtomModel[];
}
