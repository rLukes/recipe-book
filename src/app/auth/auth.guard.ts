import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, tap, take } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authSerice: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.authSerice.userSubject.pipe(
      take(1),
      map(user => {
        return !!user;
      }),
      tap(isAuth => {
        if (!isAuth) {
          this.router.navigate(["/auth"]);
        }
      })
    );
  }
}
