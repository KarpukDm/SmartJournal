import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {loginRoutes} from "./login.routes";

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent,
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {}
