import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

const shoppingListRoute = [
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule.forChild(shoppingListRoute), SharedModule, FormsModule]
})
export class ShoppingListModule {}
