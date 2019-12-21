import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "./../recipe.model";
import { RecipeService } from "./../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html",
  styleUrls: ["./recipes-detail.component.scss"]
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private rs: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.rs.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.rs.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditClicked() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
