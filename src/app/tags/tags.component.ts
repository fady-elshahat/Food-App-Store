import { FoodService } from './../services/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tags } from '../interface/tags';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?: string[];
  tags?: Tags[];
  constructor(private _FoodService:FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTags) {
          this.tags = this._FoodService.getAllTags()
    }
  }

}
