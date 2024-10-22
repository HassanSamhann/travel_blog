import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { ReviewComponent } from "../../review/review.component";
import { TitRevComponent } from "../../tit-rev/tit-rev.component";
import { FaqComponent } from "../../faq/faq.component";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [MainComponent, ReviewComponent, TitRevComponent, FaqComponent],
  styleUrl: './reviews.component.css',
  template:`
  <app-main image="./review.png"  text="Discover the World Through Real Traveler Insights"></app-main>
  <app-review></app-review>
  <app-tit-rev></app-tit-rev>
  <app-faq></app-faq>
  `

})
export class ReviewsComponent {

}
