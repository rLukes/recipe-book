import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesResoverService } from "./recipes-resolver.service";
import { RouterModule } from "@angular/router";

const recipesRoute = [
  {
    path: "recipes",
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipesDetailComponent,
        resolve: [RecipesResoverService]
      },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoute)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
