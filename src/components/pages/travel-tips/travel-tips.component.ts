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
  <header class="container m-auto d-flex justify-content-between ">
    <div>
      <h1 class="metal-mania-regular h1Title">Travel Like a Pro: <br>
       <span>Tips </span>&<span> Tricks</span></h1>
    </div>
    <div class="w-50 fs-4 " >
      <p style="color: #596365;">Our travel tips page offers essential advice to make your adventures smoother and more enjoyable. From packing hacks to safety tips, you'll find practical insights for every type of traveler. Whether you're exploring cities, hiking mountains, or traveling on a budget, we've got you covered. Discover expert advice, helpful resources, and insider knowledge to ensure your trips are stress-free and unforgettable. Ready to enhance your travel experience? Read more and start planning your next journey!</p>
    </div>
  </header>


  <app-top></app-top>
  `


})
export class TravelTipsComponent {

}
