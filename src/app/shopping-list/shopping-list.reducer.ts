import { Ingredient } from "../shared/ingredient.model";
import { Action } from "@ngrx/store";

const initialState = {
  ingredients: [new Ingredient("Aples", 34), new Ingredient("Tomato", 4)]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      };

    default:
      return state;
  }
}
