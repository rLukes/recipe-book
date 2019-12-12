import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private rs: RecipeService) {}

  ngOnInit() {
    this.rs.recipeSelected.subscribe((data: Recipe) => {
      this.selectedRecipe = data;
    });
  }

  onSelected(event: Recipe) {
    console.log(event);
    this.selectedRecipe = event;
  }
}
