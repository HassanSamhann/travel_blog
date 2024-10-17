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
    <div class="main-d">
    <div class="nav-cola" id="colaps">
    <i class="fa-solid fa-circle-xmark exit" (click)=" hide_nav()"></i>
        <ul class="cola">
                <li><a href="">Home</a></li>
                <li><a href="">Destinations</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Reviews</a></li>
                <li><a href="">Travel Tips</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>

            </ul>
            <div class="sgins">
                <a class="sins" href="">Sign Up</a>
                <a class="logs" href="">Login</a>
            </div>

        </div>

        <div class="main-text">
            "Unlock the World: Your Guide to Travel Blogs"
        </div>
        <div class="main-ipu">
            <input type="text" placeholder="What would you like to review ?">
            <i class="fa-solid fa-magnifying-glass  search"></i>
        </div>
        <div class="main-bot">
            <img src="./images/h1-rev-bottom 2.png" alt="">
        </div>
    </div>
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
    hide_nav(){
        let exit = <HTMLElement> document.querySelector(".exit") ; 
      let cola = <HTMLElement>  document.getElementById("colaps"); 
      cola.style.width = "0%" ; 
        exit.style.display = "none"
    }
    
    
}
