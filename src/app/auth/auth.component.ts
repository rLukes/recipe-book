import { NgForm } from "@angular/forms";
import { Component, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "./../shared/alert/alert.component";
import { PlaceHolderDirective } from "./../shared/placeholder/placheholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;

  private closeSub: Subscription;

  constructor(
    private as: AuthService,
    private router: Router,
    private componentFactoryReslover: ComponentFactoryResolver
  ) {}

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
        this.router.navigate(["./recipes"]);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
      }
    );
  }

  onAletClose() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryReslover.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
