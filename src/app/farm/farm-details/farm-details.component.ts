import { Component, OnInit, Input } from '@angular/core';
import { Farm } from '../farm.model';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.css']
})
export class FarmDetailsComponent implements OnInit {
  @Input() selectedFarm:Farm;

  constructor() {}
  ngOnInit() { }
}
