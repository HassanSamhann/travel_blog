import { Component ,Input} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,CommonModule ],
  styleUrl: './main.component.css',
  template: `
    <div class="main-d"   [ngStyle]="{ 'background-image': 'url(' + image + ')' }" >
      <div class="nav-cola" id="colaps">
        <i class="fa-solid fa-circle-xmark exit" (click)="hide_nav()"></i>
        <ul class="cola">
        <li  ><a  routerLink="home" routerLinkActive="active"   (click)="scrollToTop()">Home</a></li>
          <li ><a  routerLink="/destinations" routerLinkActive="active" (click)="scrollToTop()">Destinations</a></li>
          <li><a routerLink="/blogs" routerLinkActive="active" (click)="scrollToTop()">Blogs</a></li>
          <li><a routerLink="/reviews" routerLinkActive="active" (click)="scrollToTop()">Reviews</a></li>
          <li><a routerLink="/travel-tips" routerLinkActive="active" (click)="scrollToTop()"> Travel Tips</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="scrollToTop()">About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="scrollToTop()">Contact</a></li>
        </ul>
        <div class="sgins">
          <a class="sins" href="">Sign Up</a>
          <a class="logs" href="">Login</a>
        </div>
      </div>

      <div class="main-text">
        {{text}}
      </div>
      <div class="main-ipu">
        <input type="text" placeholder="What would you like to review ?" />
        <i class="fa-solid fa-magnifying-glass  search"></i>
      </div>
      <div class="main-bot">
        <img src="./images/h1-rev-bottom 2.png" alt="" />
      </div>
    </div>
  `,
})
export class MainComponent {
@Input() image: string = '';
@Input() text: string = '';

  hide_nav() {
    let exit = <HTMLElement>document.querySelector('.exit');
    let cola = <HTMLElement>document.getElementById('colaps');
    cola.style.width = '0%';
    exit.style.display = 'none';
  }

  // utilizing "getters" to keep templates clean in 'dumb' components (https://github.com/ngrx/example-app) 
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
