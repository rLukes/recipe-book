import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "./../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "header",
  templateUrl: "header.component.html"
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private ds: DataStorageService, private as: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.as.userSubject.subscribe(user => {
      //this.isAuthenticated = !user ? false : true;
      //or we can shorten it like this
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.ds.storeRecipes();
  }

  fetchData() {
    this.ds.fetchRecipes().subscribe();
  }

  logout() {
    this.isAuthenticated = false;
    this.as.logout();
  }
}
