import {AtomModel} from "./atom.model";
export class JournalTemplateModel {
    id: number;
    templateName: string;
    type: string;
    password: string;
    index: number;
    child: JournalTemplateModel[];
    atoms: AtomModel[];
}
