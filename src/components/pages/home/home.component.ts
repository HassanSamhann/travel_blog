import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { AboutComponent } from "../../about/about.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { ExploreComponent } from "../../explore/explore.component";
import { ReviewComponent } from "../../review/review.component";
import { ShareComponent } from "../../share/share.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutComponent, BlogsComponent, ExploreComponent, ReviewComponent, ShareComponent],
  styleUrl: './home.component.css', 
  template:`
  
  <app-main></app-main>
  <app-about></app-about>
  <app-explore></app-explore>
  <app-review></app-review>
  <app-share></app-share>
  `
})
export class HomeComponent {

}
