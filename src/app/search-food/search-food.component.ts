import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
  searchTerm: String = "";
  constructor(private _ActivatedRoute:ActivatedRoute , private _Router:Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(par => {
      if(par["searchTerm"])
      this.searchTerm = par["searchTerm"]
    })
  }
  search(): void{
    if (this.searchTerm) {
      this._Router.navigateByUrl("/search/" + this.searchTerm)
    }
  }

}
