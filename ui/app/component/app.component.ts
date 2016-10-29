import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/signup" routerLinkActive="active">Sign up</a>
      <a routerLink="/authenticate" routerLinkActive="active">Login</a>
      <a routerLink="/template/create" routerLinkActive="active">Create template</a>
    </nav>
    <router-outlet></router-outlet>
  `
    //styleUrls: ['../resources/css/app.component.css']
})
export class AppComponent {
    title = 'SmartJournal';
}