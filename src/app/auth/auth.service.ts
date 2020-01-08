import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBE_JsS9s4apOU7tUp21GeT6Xm8lNcN28I";
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.url, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(errorRes => {
          let errorMessage = "An unknown error occured!";
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS":
              errorMessage = "This emial exists already";
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
    var loginUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBE_JsS9s4apOU7tUp21GeT6Xm8lNcN28I";
    return this.http.post<AuthResponseData>(loginUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
