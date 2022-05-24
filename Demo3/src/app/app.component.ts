import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo3';
  searchedText:string = '';
  names:string[]=[
    "Fatma", "Rehab", "Abdorrahman", "Hadeer", "Ramaj", "Rana", "Fahd", "Ahmed", "Fairouz"
  ]
}
