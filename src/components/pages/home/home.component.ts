import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent],
  styleUrl: './home.component.css', 
  template:`
  
  <app-main></app-main>
  
  `
})
export class HomeComponent {

}
