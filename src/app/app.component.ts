import { Component, Output, EventEmitter } from '@angular/core';
import { Farm } from './farm/farm.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farm-app';
  openFarm:Farm;
  
  navigateFarm(selectedFarm:Farm)
  {
    this.openFarm=selectedFarm;
  }

}
