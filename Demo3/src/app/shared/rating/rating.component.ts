import { Component, Input, OnInit, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating:number = 4;
  cwidth:number= 0;
  constructor() {
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.cwidth = this.rating * 18;
  }
  ngOnInit(): void {
  }

}
