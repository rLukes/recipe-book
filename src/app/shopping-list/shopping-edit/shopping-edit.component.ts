import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "./../../shared/ingredient.model";
import { ShoppingListSerivce } from "./../shoppinglist.serivce";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInput: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInput: ElementRef;
  constructor(private ss: ShoppingListSerivce) {}

  ngOnInit() {}
  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amount);
    this.ss.addIngredient(newIngredient);
  }
}
