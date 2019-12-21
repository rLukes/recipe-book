import { Component, OnInit, Input, Output } from "@angular/core";
import { Recipe } from "./../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Recipe;
  @Input() index: number;

  ngOnInit() {}
}
