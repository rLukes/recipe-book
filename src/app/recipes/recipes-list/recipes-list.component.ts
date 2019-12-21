import { Component } from "@angular/core";
import { Recipe } from "./../recipe.model";
import { RecipeService } from "./../recipe.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewClicked() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
