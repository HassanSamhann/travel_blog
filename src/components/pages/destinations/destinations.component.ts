import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { ActivitiesComponent } from "../../activities/activities.component";

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [MainComponent, ActivitiesComponent],
  styleUrl: './destinations.component.css',
  template:`
  
  <app-main></app-main>
    <app-activities></app-activities>
  
  `
})
export class DestinationsComponent {

}
