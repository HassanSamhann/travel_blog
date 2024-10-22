import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [MainComponent],
  styleUrl: './reviews.component.css',
  template:`
  <app-main image="./review.png"  text="Discover the World Through Real Traveler Insights"></app-main>

  `

})
export class ReviewsComponent {

}
