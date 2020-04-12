import { Component, OnInit } from '@angular/core';
import { ShopType } from 'src/app/shared/shop-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public haveEssentials : boolean;

  public shopTypes = [ShopType.GROCERIES,ShopType.FRUITANDVEGETABLES,ShopType.MEDICINES,ShopType.HEALTHANDWELLNESS];

  constructor() { }

  ngOnInit() {
  }

  updateHaveEssentials(){
    this.haveEssentials = true;
  }

  updateNeedEssentials(){
    this.haveEssentials = false;
  }


}
