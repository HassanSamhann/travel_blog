import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from "../components/main/main.component";
import { AboutComponent } from "../components/about/about.component";
import { ActivitiesComponent } from "../components/activities/activities.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, MainComponent, AboutComponent, ActivitiesComponent],
  styleUrl: './app.component.css', 
  template : `

  <app-header></app-header>  
  <app-main></app-main>
  <app-about></app-about>
  <app-activities></app-activities>
  `
})
export class AppComponent {
  title = 'travel_blog';
}
