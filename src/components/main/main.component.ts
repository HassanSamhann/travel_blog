import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  styleUrl: './main.component.css', 
  template: `
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
export class MainComponent {
    hide_nav(){
        let exit = <HTMLElement> document.querySelector(".exit") ; 
      let cola = <HTMLElement>  document.getElementById("colaps"); 
      cola.style.width = "0%" ; 
        exit.style.display = "none"
    }

}
