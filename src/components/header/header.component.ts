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
        <div class="img">
          <img src="./images/logo.png" alt="" />
        </div>
        <ul class="list">
          <li  ><a  routerLink="home" routerLinkActive="active">Home</a></li>
          <li ><a  routerLink="/destinations" routerLinkActive="active">Destinations</a></li>
          <li><a routerLink="/blogs" routerLinkActive="active">Blogs</a></li>
          <li><a routerLink="/reviews" routerLinkActive="active">Reviews</a></li>
          <li><a routerLink="/travel-tips" routerLinkActive="active">Travel Tips</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
        <div class="sgin">
          <a class="sin" >Sign Up</a>
          <a class="log" >Login</a>
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
}
