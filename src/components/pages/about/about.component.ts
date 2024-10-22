import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { AboutComponents } from "../../about/about.component";
import { TeamComponent } from "../../team/team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MainComponent, AboutComponents, TeamComponent],
  styleUrl: './about.component.css',

  template:`
  <app-main image="./about.png"  text="Get in Touch and Start Your Journey"></app-main>
  <app-team></app-team>
  `

})
export class AboutComponent {

}
