export class Constrains {
  public static get baseURL(): string { return 'http://localhost:8080/'; }

  public static get createJournalPage(): string { return "journal/create"; }
  public static get viewJournalPage(): string { return "journal/view/"; }
  public static get editJournalPage(): string { return "journal/edit/"; }
  public static get fillJournalPage(): string { return "journal/fill/"; }
  public static get statistics(): string { return "statistics"; }
  public static get profilePage(): string { return "profile"; }
  public static get journalPage(): string { return "journal"; }
  public static get signUpPage(): string { return "signUp"; }
  public static get loginPage(): string { return "login"; }
  public static get addDisciplinesPage(): string { return "discipline/create"; }
  public static get myDisciplinesPage(): string { return "discipline/my"; }
  public static get createAcademicPlanPage(): string { return "academicPlan/create"; }
  public static get myAcademicPlansPage(): string { return "academicPlan/my"; }

  public static get createJournalApi(): string { return "api/journal/create"; }
  public static get getMyJournalsApi(): string { return "api/journal/my"; }
  public static get saveJournalApi(): string { return "api/journal/save"; }
  public static get findJournalApi(): string { return "api/journal"; }
  public static get signUpApi(): string { return "api/signUp"; }
  public static get loginApi(): string { return "api/login"; }
  public static get logoutApi(): string { return "api/logout"; }
  public static get getAverageScore(): string { return "api/statistics/averageScore"; }
  public static get myDisciplinesApi(): string { return "api/discipline/my"; }
  public static get saveDisciplinesApi(): string { return "api/discipline/save"; }
  public static get createAcademicPlanApi(): string { return "api/academicPlan/save"; }
  public static get getAcademicPlanByDisciplineIdApi(): string { return "api/academicPlan/getByDisciplineId"; }
  public static get getAcademicPlanByDisciplineIdAndLayerIdApi(): string { return "api/academicPlan/getByDisciplineIdAndLayerId"; }
  public static get updateCellApi(): string { return "api/journal/updateCell"}
  public static get getAccountApi(): string { return "api/profile/getAccount"}
  public static get updateJournalApi(): string { return "api/journal/update"}
  public static get uploadFileApi(): string { return "api/journal/upload"}

}
