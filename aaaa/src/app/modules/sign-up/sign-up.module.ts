import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {signUpRoutes} from "./sign-up.routes";
import {SignUpComponent} from "./sign-up.component";

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(signUpRoutes)
  ],
  declarations: [
    SignUpComponent,
  ],
  bootstrap: [SignUpComponent]
})
export class SignUpModule {}
