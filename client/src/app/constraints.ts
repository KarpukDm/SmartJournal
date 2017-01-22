export class Constrains {
  public static get baseURL(): string { return 'http://localhost:8080/'; }

  public static get loginURL(): string { return "login"; }
  public static get signupURL(): string { return "signUp"; }
  public static get createTemplateURL(): string { return "template/create"; }
  public static get findTemplateURL(): string { return "template"; }
  public static get viewTemplateURL(): string { return "template/view/"; }
  public static get editTemplateURL(): string { return "template/edit/"; }
  public static get fillTemplateURL(): string { return "template/fill/"; }
  public static get saveTemplateURL(): string { return "template/save"; }
  public static get myTemplatesURL(): string { return "myTemplates"; }
  public static get profileURL(): string { return "profile"; }
  public static get journalURL(): string { return "journal"; }

  public static get getMyTemplatesURL(): string { return "api/getMyTemplates"; }
}
