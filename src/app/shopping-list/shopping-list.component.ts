import { Component, OnInit } from "@angular/core";
import { Ingredient } from "./../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Aples", 34),
    new Ingredient("Tomato", 4)
  ];
  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
