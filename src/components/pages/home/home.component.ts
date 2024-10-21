import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { AboutComponent } from "../../about/about.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { ExploreComponent } from "../../explore/explore.component";
import { GuideComponent } from "../../guide/guide.component";
import { ReviewComponent } from "../../review/review.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutComponent, BlogsComponent, ExploreComponent, GuideComponent, ReviewComponent],
  styleUrl: './home.component.css', 
  template:`
  
  <app-main></app-main>
  <app-about></app-about>
  <app-explore></app-explore>
  <app-guide></app-guide>
  <app-review></app-review>
  `
})
export class HomeComponent {

}
