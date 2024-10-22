import { Component } from '@angular/core';
import { ShareComponent } from "../../share/share.component";
import { MainComponent } from "../../main/main.component";
import { FaqComponent } from "../../faq/faq.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [ShareComponent, MainComponent, FaqComponent],
  styleUrl: './blogs.component.css',
  template:`
  <app-main image="./blog.jpg"  text="Journey Through Stories and Experiences"></app-main>
  <app-share></app-share>
  <app-faq></app-faq>
  `
})
export class BlogsComponent {

}
