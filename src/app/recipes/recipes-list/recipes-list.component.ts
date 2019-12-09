import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Fish and curry",
      "Test food",
      "http://www.evocativepop.com/wp-content/uploads/2019/08/1.jpg"
    )
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(i: Recipe) {
    this.recipeWasSelected.emit(i);
  }
}
