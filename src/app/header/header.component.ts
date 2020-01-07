import { Component } from "@angular/core";
import { DataStorageService } from "./../shared/data-storage.service";

@Component({
  selector: "header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  constructor(private ds: DataStorageService) {}

  onSaveData() {
    this.ds.storeRecipes();
  }

  fetchData() {
    this.ds.fetchRecipes().subscribe();
  }
}
