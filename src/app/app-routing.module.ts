import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";

import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResoverService } from "./recipes/recipes-resolver.service";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
