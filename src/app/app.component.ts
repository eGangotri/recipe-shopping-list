import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-shopping';
  constructor(private service: AppService) { }

  getDisplayable(_val:string){
    console.log(`_val: ${_val}`)x
    return this.service.getDisplayable(_val);
  }
}



 
