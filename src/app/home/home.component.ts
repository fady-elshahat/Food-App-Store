import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../interface/food';
import { FoodService } from '../services/food/food.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private _FoodServices: FoodService , private _ActivatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((par) => {
      if (par["searchTerm"]) {
        this.foods = this._FoodServices.getAllFoodsBySearchTerm(par["searchTerm"]);
      } else if (par["tag"]) {
        this.foods = this._FoodServices.getAllFoodsByTag(par["tag"])
      }else {
        this.foods = this._FoodServices.getAll()
      }
    })
  }

}
