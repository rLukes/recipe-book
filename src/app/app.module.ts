import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ShoppingListSerivce } from "./shopping-list/shoppinglist.serivce";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeService } from "./recipes/recipe.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthInterceptorService } from "./auth/auth-interceptor.service";

import { ShoppingListModule } from "./shopping-list/shoppinglist.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { StoreModule } from "@ngrx/store";
import { shoppingListReducer } from "./shopping-list/store/shopping-list.reducer";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer })
  ],

  providers: [
    ShoppingListSerivce,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
