import { Component, Renderer2, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  styleUrls: ['./activities.component.css'],
  template: `
    <header class="container m-auto d-flex justify-content-between ">
      <div>
        <h1 class="metal-mania-regular h1Title">
          <span>What</span> Journey Will Inspire You Today?
        </h1>
        <p class="Urbanist-font">
          Making the Most of Your Travel Experience in 2023
        </p>
      </div>
    </header>
    <div class="activites">
      <div class="act-title mb-5">
        <div class="fs-sm-5">ACTIVITIES</div>
      </div>
      <div class="container">
        <div class="row cards gap-5 justify-content-center ">
          <div class="card card1 col-2 col-md-4 col-sm-6 active" #card>
            <div class="img">
              <img class="img-fluid" src="./images/activites/Frame1.png" alt="">
            </div>
            <div class="text block">

              <h3 class="m-0 p-0">Camping</h3>
              <p class="m-0 p-0">Lorem ipsum dolor amit</p>
            </div>
          </div>
          <div class="card card2 col-2 col-md-4 col-sm-6" #card>
            <div class="img">
              <img class="img-fluid" src="./images/activites/Frame2.png" alt="">
            </div>
            <div class="text">
              <h3 class="m-0 p-0">adventure</h3>
              <p class="m-0 p-0">Lorem ipsum dolor amit</p>
            </div>
          </div>
          <div class="card card3 col-2 col-md-4 col-sm-6" #card>
            <div class="img">
              <img class="img-fluid" src="./images/activites/Frame3.png" alt="">
            </div>
            <div class="text">

              <h3 class="m-0 p-0">hiking</h3>
              <p class="m-0 p-0">Lorem ipsum dolor amit</p>
            </div>
          </div>
          <div class="card card4 col-2 col-md-4 col-sm-6" #card>
            <div class="img">
              <img class="img-fluid" src="./images/activites/Frame4.png" alt="">
            </div>
            <div class="text">

              <h3 class="m-0 p-0">Glamping</h3>
              <p class="m-0 p-0">Lorem ipsum dolor amit</p>
            </div>
          </div>
          <div class="card card5 col-2 col-md-4 col-sm-6" #card>
            <div class="img">
              <img class="img-fluid" src="./images/activites/Frame5.png" alt="">
            </div>
            <div class="text">
              <h3 class="m-0 p-0">Kayaking</h3>
              <p class="m-0 p-0">Lorem ipsum dolor amit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ActivitiesComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.cards.forEach((card) => {
      this.renderer.listen(card.nativeElement, 'click', () => {
        this.cards.forEach((otherCard) => {
          this.renderer.removeClass(otherCard.nativeElement, 'active');
          const textElement = otherCard.nativeElement.querySelector('.text');
          if (textElement) {
            this.renderer.removeClass(textElement, 'block');
          }
        });

        this.renderer.addClass(card.nativeElement, 'active');
        
        const textElement = card.nativeElement.querySelector('.text');
        if (textElement) {
          this.renderer.addClass(textElement, 'block');
        }
      });
    });
  }
}
