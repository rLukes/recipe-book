import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "./../../shared/ingredient.model";
import { ShoppingListSerivce } from "./../shoppinglist.serivce";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) slFormr: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private ss: ShoppingListSerivce) {}

  ngOnInit() {
    this.subscription = this.ss.startedEditing.subscribe((data: number) => {
      this.editMode = true;
      this.editedItemIndex = data;
      this.editedItem = this.ss.getIngredient(this.editedItemIndex);
      this.slFormr.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.ss.updateIngredient(this.editedItem, newIngredient);
    } else {
      this.ss.addIngredient(newIngredient);
    } 
    this.editMode = false;
    form.reset();
  }
}
