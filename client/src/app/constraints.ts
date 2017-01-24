export class Constrains {
  public static get baseURL(): string { return 'http://localhost:8080/'; }

  public static get createTemplateURL(): string { return "template/create"; }
  public static get viewTemplateURL(): string { return "template/view/"; }
  public static get editTemplateURL(): string { return "template/edit/"; }
  public static get fillTemplateURL(): string { return "template/fill/"; }
  public static get myTemplatesURL(): string { return "myTemplates"; }
  public static get profileURL(): string { return "profile"; }
  public static get journalURL(): string { return "journal"; }

  public static get getMyTemplatesURL(): string { return "api/getMyTemplates"; }
  public static get saveTemplateURL(): string { return "api/template/save"; }
  public static get findTemplateURL(): string { return "api/template"; }
  public static get signupURL(): string { return "api/signUp"; }
  public static get loginURL(): string { return "api/login"; }

}
