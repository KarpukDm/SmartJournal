import {LayerModel} from "./layer.model";
import {AccountModel} from "./account.model";

export class JournalModel {

  id: number;

  journalName: string;

  layer: LayerModel;

  accounts: AccountModel[];

  constructor(){
    this.layer = new LayerModel();
  }

}
