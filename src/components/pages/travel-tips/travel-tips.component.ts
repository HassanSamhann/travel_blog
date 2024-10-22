import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { TopComponent } from "../../top/top.component";

@Component({
  selector: 'app-travel-tips',
  standalone: true,
  imports: [MainComponent, TopComponent],
  styleUrl: './travel-tips.component.css', 

  template:`
  <app-main image="./trip.jpg"  text="Our Journey: Inspiring Travel, One Trip at a Time"></app-main>
  <app-top></app-top>
  `


})
export class TravelTipsComponent {

}
