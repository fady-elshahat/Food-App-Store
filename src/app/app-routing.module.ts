import { CartComponent } from './cart/cart.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "search/:searchTerm", component: HomeComponent },
  { path: "tags/:tag", component: HomeComponent },
  { path: "food/:id", component: FoodDetailsComponent },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
