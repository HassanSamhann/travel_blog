import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { ActivitiesComponent } from "../../activities/activities.component";
import { LANDMARKSComponent } from "../../landmarks/landmarks.component";

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [MainComponent, ActivitiesComponent, LANDMARKSComponent],
  styleUrl: './destinations.component.css',
  template:`
  
  <app-main image="./des.jpg"  text="Plan Your Best Trip Ever"></app-main>
  
  <app-activities></app-activities>
  <app-landmarks></app-landmarks>
  `
})
export class DestinationsComponent {

}
