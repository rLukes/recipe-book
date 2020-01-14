import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "./../shared/ingredient.model";
import { ShoppingListSerivce } from "./shoppinglist.serivce";
import { Subscription } from "rxjs";
import { LoggingService } from "./../logging.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private ss: ShoppingListSerivce, private ls: LoggingService) {}

  ngOnInit() {
    this.ingredients = this.ss.getIngredients();
    this.subscription = this.ss.ingredientChanged.subscribe(
      (data: Ingredient[]) => {
        this.ingredients = data;
      }
    );
    this.ls.printLog("hello from shoppinglist component");
  }
  onEditItem(i: number) {
    this.ss.startedEditing.next(i);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
