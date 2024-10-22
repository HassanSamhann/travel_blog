import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  styleUrl: './faq.component.css',
  template: `
    <div class="left-text-container">
      <div class="left-text">FAQ</div>
    </div>

    <div class="accordion">
      <div class="accordion-content">
        <header>
          <span class="title">What is glamping ?</span>
          <i class="fa-solid fa-plus"></i>
        </header>

        <p class="description">
          Glamping, or "glamorous camping," offers a luxurious alternative to traditional camping. It blends nature with comfort, featuring amenities like cozy beds, electricity, and even bathrooms in nature.
        </p>
      </div>

      <div class="accordion-content">
        <header>
          <span class="title">What essentials do I need for a camping trip ?</span>
          <i class="fa-solid fa-plus"></i>
        </header>

        <p class="description">
          For camping, pack basics like a tent, sleeping bag, cooking gear, and a first-aid kit. Tailor your packing list based on the weather and location to ensure you’re fully prepared.
        </p>
      </div>

      <div class="accordion-content">
        <header>
          <span class="title">What should I pack for glamping ?</span>
          <i class="fa-solid fa-plus"></i>
        </header>

        <p class="description">
          Pack for comfort! Essentials include comfortable clothing, toiletries, and any personal items for convenience. Since most glamping sites provide basic amenities, you won’t need typical camping gear.
        </p>
      </div>

      <div class="accordion-content">
        <header>
          <span class="title">Can families enjoy camping or glamping ?</span>
          <i class="fa-solid fa-plus"></i>
        </header>

        <p class="description">
          Absolutely! Many campsites and glamping locations are family-friendly, offering activities for all ages. We provide tips to make the experience enjoyable and safe for families.
        </p>
      </div>
    </div>
  `
})
export class FaqComponent implements OnInit {

  ngOnInit() {
    this.initAccordion();
  }

  initAccordion() {
    const accordionContent = document.querySelectorAll(".accordion-content");

    accordionContent.forEach((item: any, index) => {
      let header = <HTMLElement>item.querySelector("header");
      header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = <HTMLElement>item.querySelector(".description");
        if (item.classList.contains("open")) {
          description.style.height = `${description.scrollHeight}px`;
          item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
          description.style.height = "0px";
          item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }

        this.removeOpen(index);
      });
    });
  }

  removeOpen(index1: any) {
    const accordionContent = document.querySelectorAll(".accordion-content");

    accordionContent.forEach((item2: any, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");

        let des = <HTMLElement>item2.querySelector(".description");
        des.style.height = "0px";
        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  }
}
