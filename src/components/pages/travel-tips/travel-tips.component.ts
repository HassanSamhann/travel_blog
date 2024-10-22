import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";

@Component({
  selector: 'app-travel-tips',
  standalone: true,
  imports: [MainComponent],
  styleUrl: './travel-tips.component.css', 

  template:`
  <app-main image="./trip.jpg"  text="Our Journey: Inspiring Travel, One Trip at a Time"></app-main>

  `


})
export class TravelTipsComponent {

}
