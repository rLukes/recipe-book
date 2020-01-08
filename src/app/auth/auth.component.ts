import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private as: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      console.log("login mode....................");
      authObs = this.as.login(email, password);
    } else {
      authObs = this.as.signup(email, password);
    }

    authObs.subscribe(
      data => {
        this.isLoading = false;
        console.log(data);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
  }
}
