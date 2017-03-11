export class Constrains {
  public static get baseURL(): string { return 'http://localhost:8080/'; }

  public static get createTemplatePage(): string { return "template/create"; }
  public static get viewTemplatePage(): string { return "template/view/"; }
  public static get editTemplatePage(): string { return "template/edit/"; }
  public static get fillTemplatePage(): string { return "template/fill/"; }
  public static get myTemplatesPage(): string { return "myTemplates"; }
  public static get profilePage(): string { return "profile"; }
  public static get journalPage(): string { return "journal"; }
  public static get signUpPage(): string { return "signUp"; }
  public static get loginPage(): string { return "login"; }

  public static get createTemplateApi(): string { return "api/template/create"; }
  public static get getMyTemplatesApi(): string { return "api/myTemplates"; }
  public static get saveTemplateApi(): string { return "api/template/save"; }
  public static get findTemplateApi(): string { return "api/template"; }
  public static get signUpApi(): string { return "api/signUp"; }
  public static get loginApi(): string { return "api/login"; }

}
