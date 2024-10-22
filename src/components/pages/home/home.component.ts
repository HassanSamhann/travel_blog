import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { AboutComponents } from "../../about/about.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { ExploreComponent } from "../../explore/explore.component";
import { ReviewComponent } from "../../review/review.component";
import { ShareComponent } from "../../share/share.component";
import { LocationComponent } from "../../location/location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutComponents, BlogsComponent, ExploreComponent, ReviewComponent, ShareComponent, LocationComponent],
  styleUrl: './home.component.css', 
  template:`
  
  <app-main image="./bg.jpg"  text="Unlock the World: Your Guide to Travel Blogs"></app-main>
  <app-abouts></app-abouts>
  <app-explore></app-explore>
  <app-review></app-review>
  <app-location></app-location>
  `
})
export class HomeComponent {

}
