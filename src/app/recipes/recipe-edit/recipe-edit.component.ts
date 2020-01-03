import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "./../recipe.service";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rs: RecipeService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }
  private initForm() {
    let recipeName = "";
    let recipieImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.rs.getRecipe(this.id);
      recipeName = recipe.name;
      recipieImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingr of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingr.name, Validators.required),
              amount: new FormControl(ingr.amount, [Validators.required])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      im: new FormControl(recipieImagePath, Validators.required),
      desc: new FormControl(recipeDescription),
      ingredients: recipeIngredients
    });
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  onSubmit() {
    
    const newRecipe = new Recipe(
      this.recipeForm.value["name"],
      this.recipeForm.value["desc"],
      this.recipeForm.value['im'],
      this.recipeForm.value['ingredients'],
    );
    
    if (this.editMode) { 
      this.rs.updateRecipe(this.id, newRecipe); 
    } else {
      this.rs.addRecipe(newRecipe);
    }
  }
}
