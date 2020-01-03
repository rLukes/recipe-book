import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "./../shared/ingredient.model";
import { ShoppingListSerivce } from "./../shopping-list/shoppinglist.serivce";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      "Fish and curry",
      "Test food",
      "http://www.evocativepop.com/wp-content/uploads/2019/08/1.jpg",
      [new Ingredient("Apple", 3), new Ingredient("Orangem", 9)]
    )
  ];
  constructor(private sl: ShoppingListSerivce) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.sl.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
