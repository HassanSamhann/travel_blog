import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MainComponent],
  styleUrl: './contact.component.css',

  template:`
  
  <app-main image="./des.png"  text="Journey Through Stories and Experiences"></app-main>
  
  
  `
})
export class ContactComponent {

}
