export class Constrains {
  public static get baseURL(): string { return 'http://localhost:8080/'; }

  public static get createJournalPage(): string { return "journal/create"; }
  public static get viewJournalPage(): string { return "journal/view/"; }
  public static get editJournalPage(): string { return "journal/edit/"; }
  public static get fillJournalPage(): string { return "journal/fill/"; }
  public static get myJournalsPage(): string { return "journal"; }
  public static get profilePage(): string { return "profile"; }
  public static get journalPage(): string { return "journal"; }
  public static get signUpPage(): string { return "signUp"; }
  public static get loginPage(): string { return "login"; }

  public static get createJournalApi(): string { return "api/journal/create"; }
  public static get getMyJournalsApi(): string { return "api/journal/my"; }
  public static get saveJournalApi(): string { return "api/journal/save"; }
  public static get findJournalApi(): string { return "api/journal"; }
  public static get signUpApi(): string { return "api/signUp"; }
  public static get loginApi(): string { return "api/login"; }

}
