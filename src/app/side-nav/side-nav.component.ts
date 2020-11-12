import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  features  = [ 
    {
    title:'Recipe',
    route: '',
    icon:'emoji_food_beverage'
  }, 
  {
      title:'Shopping',
      route: '',
      icon:'shopping_bag'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
