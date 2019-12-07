import { Component, OnInit } from "@angular/core";
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
  constructor() {}

  ngOnInit() {}
}
