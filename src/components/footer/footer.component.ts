import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  styleUrl: './footer.component.css',
  template: `
    <footer>
      <img class="img" src="./images/h1-rev-bottom 2.png" alt="" />
      <div class="container">
        <div class="row justify-content-between text text-sm-center">
          <div class="col-lg-3 col-md-6 col-sm-12 ">
            <div class="logo">
            <img class="l" src="./images/Logo2.png" alt="" />
            <img class="s" src="./images/gp77.png" alt="" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 text">
            <h4>Explore Destination</h4>
            <ul>
              <li><a href=""> Travel World </a></li>
              <li><a href=""> Travel Tips </a></li>
              <li><a href=""> Plan your Trip </a></li>
              <li><a href=""> Share Experiences </a></li>
              <li><a href=""> Travel Strories </a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 text">
            <h4>About Us</h4>
            <ul>
              <li><a href=""> Privacy Policy </a></li>
              <li><a href=""> Contact Us </a></li>
              <li><a href="">Terms of service </a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="text">
            <h4>Stay in the loop</h4>
            <ul>
              <li><a href=""> Join our mailing list to stay in the loop with our newest
              for Event and concert </a></li>
            </ul>
              <a class="live mt-3" href="">Live Chat</a>
              <h4 class="mt-4">Contact Us</h4>
              <div class="contact d-flex gap-3 mb-3">
              <img src="./images/contact/WhatsApp.png" alt="">
              <img src="./images/contact/Group.png" alt="">
              <img src="./images/contact/Facebook.png" alt="">
              <img src="./images/contact/LinkedIn.png" alt="">
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
