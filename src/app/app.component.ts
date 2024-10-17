import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from "../components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, MainComponent],
  styleUrl: './app.component.css', 
  template : `

  <app-header></app-header>  
  <app-main></app-main>
  `
})
export class AppComponent {
  title = 'travel_blog';
}
