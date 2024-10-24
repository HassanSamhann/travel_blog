import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './header.component.css',
  template: `
    <header>
      <nav>
        <div class="img"  routerLink="/" style="cursor: pointer;">
          <img src="./images/logo.png" alt="" />
        </div>
        <ul class="list">
          <li  ><a  routerLink="home" routerLinkActive="active"   (click)="scrollToTop()">Home</a></li>
          <li ><a  routerLink="/destinations" routerLinkActive="active" (click)="scrollToTop()">Destinations</a></li>
          <li><a routerLink="/blogs" routerLinkActive="active" (click)="scrollToTop()">Blogs</a></li>
          <li><a routerLink="/reviews" routerLinkActive="active" (click)="scrollToTop()">Reviews</a></li>
          <li><a routerLink="/travel-tips" routerLinkActive="active" (click)="scrollToTop()"> Travel Tips</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="scrollToTop()">About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="scrollToTop()">Contact</a></li>
        </ul>
        <div class="sgin">
          <a class="sin" routerLink="sign-up" >Sign Up</a>
          <a class="log" routerLink="login" >Login</a>
        </div>
        <i class="fa-solid fa-bars bars" (click)="display_nav()"></i>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let head = <HTMLElement>document.querySelector('header');
    if (window.scrollY > 0) {
      head.classList.add('header-bg');
    } else {
      head.classList.remove('header-bg');
    }
  }
  display_nav() {
    let exit = <HTMLElement>document.querySelector('.exit');
    let cola = <HTMLElement>document.getElementById('colaps');
    cola.style.width = '100%';
    exit.style.display = 'block';
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
