import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <nav>
      <a routerLink="/signup" routerLinkActive="active">Sign up</a>
      <a routerLink="/authenticate" routerLinkActive="active">Login</a>
      <a routerLink="/template/create" routerLinkActive="active">Create template</a>
      <a routerLink="/template" routerLinkActive="active">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `
    //styleUrls: ['../resources/css/app.component.css']
})
export class AppComponent {
}