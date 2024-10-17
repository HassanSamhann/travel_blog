import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FontAwesomeModule],
  styleUrl: './app.component.css', 
  template : `

  <app-header></app-header>  
  `
})
export class AppComponent {
  title = 'travel_blog';
}
