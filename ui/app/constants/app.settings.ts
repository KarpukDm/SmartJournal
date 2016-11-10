export class AppSettings {
    public static get baseURL(): string { return 'http://localhost:8080/'; }

    public static get loginURL(): string { return this.baseURL + "authenticate"; }
    public static get signupURL(): string { return this.baseURL + "signup"; }
    public static get createTemplateURL(): string { return this.baseURL + "template/create"; }
    public static get findTemplateURL(): string { return this.baseURL + "template"; }
    public static get viewTemplateURL(): string { return "/template/view/"; }
    public static get editTemplateURL(): string { return "/template/edit/"; }
}