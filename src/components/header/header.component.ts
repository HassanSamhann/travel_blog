import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  styleUrl: './header.component.css', 
  template: `
   <header>
        <nav>
            <div class="img">
                <img src="./images/logo.png" alt="">
            </div>
            <ul class="list">
                <li><a href="">Home</a></li>
                <li><a href="">Destinations</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Reviews</a></li>
                <li><a href="">Travel Tips</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>

            </ul>
            <div class="sgin">
                <a class="sin" href="">Sign Up</a>
                <a class="log" href="">Login</a>
            </div>
            <i class="fa-solid fa-bars bars"  (click)="display_nav()"></i>
        </nav>
    </header>
    
  `
  
})
export class HeaderComponent {
    @HostListener("window:scroll", [])
    onWindowScroll() {
        
      let head = <HTMLElement> document.querySelector("header"); 
        if(window.scrollY>0){
            head.classList.add("header-bg");
        }else{
            head.classList.remove("header-bg")
        }
    }
     display_nav() {
        let exit = <HTMLElement> document.querySelector(".exit") ; 
      let cola = <HTMLElement>  document.getElementById("colaps"); 
      cola.style.width = "100%" ; 
        exit.style.display = "block"
    }
    
    
}
