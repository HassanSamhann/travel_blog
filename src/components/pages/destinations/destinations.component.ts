import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { ActivitiesComponent } from "../../activities/activities.component";

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [MainComponent, ActivitiesComponent],
  styleUrl: './destinations.component.css',
  template:`
  
  <app-main image="./des.png"  text="Plan Your Best Trip Ever"></app-main>
  
  <app-activities></app-activities>
  
  `
})
export class DestinationsComponent {

}
