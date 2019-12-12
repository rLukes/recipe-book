import { Component, OnInit } from "@angular/core";
import { Ingredient } from "./../shared/ingredient.model";
import { ShoppingListSerivce } from "./shoppinglist.serivce";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private ss: ShoppingListSerivce) {}

  ngOnInit() {
    this.ingredients = this.ss.getIngredients();
    this.ss.ingredientChanged.subscribe((data: Ingredient[]) => {
      this.ingredients = data;
    });
  }
}
