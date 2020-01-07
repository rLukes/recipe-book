import { DropdownDirective } from "./shared/dropdown-directive";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipes/recipes-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListSerivce } from "./shopping-list/shoppinglist.serivce";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeService } from "./recipes/recipe.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    DropdownDirective,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [ShoppingListSerivce, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
