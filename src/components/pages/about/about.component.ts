import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MainComponent],
  styleUrl: './about.component.css',

  template:`
  <app-main image="./about.png"  text="Get in Touch and Start Your Journey"></app-main>

  `

})
export class AboutComponent {

}
