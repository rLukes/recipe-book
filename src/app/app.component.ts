import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { LoggingService } from "./logging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private as: AuthService, private ls: LoggingService) {}

  ngOnInit(): void {
    this.as.autoLogin();
    this.ls.printLog("hello from appComponent");
  }
}
