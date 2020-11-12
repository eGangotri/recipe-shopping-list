import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedNavigationField = 'Recipe';
  constructor() { }

  setClicked(_val:string):void{
      this.selectedNavigationField = _val;
  }

  getDisplayable(_val):boolean{
    return _val === this.selectedNavigationField;
  }
}
