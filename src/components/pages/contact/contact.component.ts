import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { ContaComponent } from "../../conta/conta.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MainComponent, ContaComponent],
  styleUrl: './contact.component.css',

  template:`
  
  <app-main image="./contact.jpg"  text="Journey Through Stories and Experiences"></app-main>


  
  <app-conta></app-conta>
  `
})
export class ContactComponent {

}
