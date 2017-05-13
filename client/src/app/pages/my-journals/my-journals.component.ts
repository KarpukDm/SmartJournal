import {Component, OnInit} from "@angular/core";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {JournalService} from "../../services/journal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JournalModel} from "../../models/journal.model";
import {isNullOrUndefined} from "util";
import {LayerModel} from "../../models/layer.model";
import {Constrains} from "../../constraints";
import {go} from "@ngrx/router-store";
import {StatisticsService} from "../../services/statistics.service";
import {AverageScoreModel} from "../../components/statistics/types/average-score.model";
import {UserService} from "../../services/user.service";
import {AccountModel} from "../../models/account.model";

@Component({
  selector: 'my-templates',
  templateUrl: './my-journals.component.html',
  styleUrls: ['./my-journals.component.css']
})
export class MyJournalsComponent implements OnInit {

  private errorMessage: string;
  private journals: JournalModel[];
  private layerHistory: LayerModel[];
  private isLastLevel: boolean;
  private journal: JournalModel;
  private isSelected: boolean;
  private averageScores: AverageScoreModel[];
  private sharedJournal: JournalModel;
  private users: AccountModel[];
  private sharedUsers: AccountModel[];
  private userName: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private journalService: JournalService,
              private store: Store<AppState>,
              private statisticsService: StatisticsService,
              private userService: UserService) {
    this.layerHistory = [];
    this.isLastLevel = false;
    this.isSelected = false;
    this.averageScores = [];
    this.sharedUsers = [];
    this.userName = "";
  }

  ngOnInit() {

    this.store.dispatch(go([Constrains.statistics]));

    this.journalService.getMyTemplates()
      .subscribe(
        templates => {
          this.journals = templates;
          console.log(this.journals);
        },
        error => this.errorMessage = <any>error
      );
  }

  private getLayers() {
    if (!isNullOrUndefined(this.layerHistory) && this.layerHistory.length > 0) {
      if (!isNullOrUndefined(this.layerHistory.length > 0 && !isNullOrUndefined(this.layerHistory.slice(-1)[0].layers))) {
        return this.layerHistory.slice(-1)[0].layers;
      }
    }
  }

  private selectLayer(layer: LayerModel) {
    if (!isNullOrUndefined(layer.layers)) {
      this.layerHistory.push(layer);
      this.isLastLevel = layer.layers.length == 0;
      if (this.isLastLevel == true) {
      }

      this.updateStatistics();
    }
  }

  private selectJournal(template: JournalModel) {
    this.journal = template;
    console.log(template);
    this.layerHistory.push(this.journal.layer);
    this.isSelected = true;
  }

  private goUp() {
    if (this.layerHistory.length > 1) {
      this.layerHistory.pop();
    } else {
      this.isSelected = false;
    }
    this.isLastLevel = false;
  }

  private updateStatistics() {
    this.statisticsService.getAverageScore()
      .subscribe(x => {
        console.log(x);
        this.averageScores = x;
      })
  }

  private gotoFillJournal(id: number): void {
    let link = [Constrains.fillJournalPage, id];
    this.router.navigate(link);
  }

  private gotoEditJournal(id: number): void {
    let link = [Constrains.editJournalPage, id];
    this.router.navigate(link);
  }

  private shareJournal(journal: JournalModel) {
    this.sharedJournal = journal;
  }

  private fetchUsers() {
    this.userService.getUsersByName(this.userName)
      .subscribe(users => {
        console.log(users);
        this.users = users;
        this.sharedUsers = [];
      })
  }

  private pickUser(user: AccountModel) {

    let index = this.sharedUsers.indexOf(user);
    if (index > -1) {
      this.sharedUsers.splice(index, 1);
      return;
    }
    this.sharedUsers.push(user);
  }

  private isSelectedUser(user: AccountModel) {
    return this.sharedUsers.includes(user);
  }

  private updatJournal() {
    if (isNullOrUndefined(this.sharedJournal.accounts)) {
      this.sharedJournal.accounts = [];
    }

    for (let i of this.sharedUsers) {
      if (!this.sharedJournal.accounts.includes(i)) {
        this.sharedJournal.accounts.push(i);
      }
    }

    this.journalService.updateJournal(this.sharedJournal)
      .subscribe(res => {
        this.sharedJournal = null;
      })
  }

}
