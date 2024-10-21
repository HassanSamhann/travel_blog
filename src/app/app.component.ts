import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from "../components/main/main.component";
import { AboutComponent } from "../components/about/about.component";
import { ActivitiesComponent } from "../components/activities/activities.component";
import { FooterComponent } from "../components/footer/footer.component";
import { TeamComponent } from "../components/team/team.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, MainComponent, AboutComponent, ActivitiesComponent, FooterComponent, TeamComponent],
  styleUrl: './app.component.css', 
  template : `

  <app-header></app-header>  
  <!-- <app-main></app-main>
  <app-team></app-team>
  <app-about></app-about> -->
  <router-outlet></router-outlet>
  <!-- <app-activities></app-activities> -->
  <app-footer></app-footer>
  
  `
})
export class AppComponent {
  title = 'travel_blog';
}
