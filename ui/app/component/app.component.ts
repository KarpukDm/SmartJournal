import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
  `,
    styleUrls: ['../resources/css/app.component.css']
})
export class AppComponent {
}