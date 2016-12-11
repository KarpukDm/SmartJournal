export class AppSettings {
    public static get baseURL(): string { return 'http://localhost:8080/'; }

    public static get loginURL(): string { return "authenticate"; }
    public static get signupURL(): string { return "signup"; }
    public static get createTemplateURL(): string { return "template/create"; }
    public static get findTemplateURL(): string { return "template"; }
    public static get viewTemplateURL(): string { return "template/view/"; }
    public static get editTemplateURL(): string { return "template/edit/"; }
    public static get profileURL(): string { return "profile"; }
}