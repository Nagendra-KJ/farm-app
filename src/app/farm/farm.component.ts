import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Farm } from "./farm.model";

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  farmList:Farm[] =[
    new Farm("Nagendra's farm","Farm 1","",[1,2,3,4],[5,6,7,8]),
    new Farm("Holla's farm","We'll all quit EC and become farmers","",[11,12,14,14],[15,16,17,18])
  ];
  @Output() selectedFarm=new EventEmitter<Farm>();

  constructor() { }

  ngOnInit() { }

  onFarmSelect(selectedFarm:Farm)
  {
    this.selectedFarm.emit(selectedFarm);
  }
}
