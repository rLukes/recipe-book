import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "./../recipe.model";
import { RecipeService } from "./../recipe.service";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html",
  styleUrls: ["./recipes-detail.component.scss"]
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private rs: RecipeService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    this.rs.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
