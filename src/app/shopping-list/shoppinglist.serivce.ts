import { Ingredient } from "../shared/ingredient.model";

import { Subject } from "rxjs";

export class ShoppingListSerivce {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Aples", 34),
    new Ingredient("Tomato", 4)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
