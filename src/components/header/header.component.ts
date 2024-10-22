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
          <li  ><a  routerLink="/">Home</a></li>
          <li ><a  routerLink="/destinations">Destinations</a></li>
          <li><a routerLink="/blogs">Blogs</a></li>
          <li><a routerLink="/reviews">Reviews</a></li>
          <li><a routerLink="/travel-tips">Travel Tips</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/contact">Contact</a></li>
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
