import { Food } from 'src/app/interface/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  constructor(private _FoodService: FoodService, private _ActivatedRoute: ActivatedRoute,
  private _Router:Router ,private _CartService:CartService ) { }

  food!: Food;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((param) => {
      if (param["id"])
        this.food = this._FoodService.getFoodById(param["id"]);
    })
  }
  addToCart() {
    this._CartService.addToCart(this.food);
    this._Router.navigateByUrl("/cart")
  }

}
