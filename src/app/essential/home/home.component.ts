import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public haveEssentials : boolean;

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
