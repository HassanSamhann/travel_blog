import { Component } from '@angular/core';

@Component({
  selector: 'app-tit-rev',
  standalone: true,
  imports: [],
  styleUrl: './tit-rev.component.css',
  template:`
  
      <!-- pagenation -->
      <div class="pagination">
        <a href="#" class="previous">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">...</a>
        <a href="#">50</a>
        <a href="#" class="next">&raquo;</a>
    </div>
<!-- your own blog -->
<section class="container m-auto mt-5 mb-3 ownBlog ">
    <div class="row">
        <div class="col-sm-12 col-lg-4 ">
            <div class="w-100 h-100  bg-body-secondary p-4 text-center rounded-5 align-content-center">
                <img src="./images/Vector.png" alt="" class="w-25">
            </div>
        </div>
        <div class="col-sm-12 col-lg-8">

            <form class="row g-3 mx-5">
            
                <div class=" mb-3 col-10">
                    <label for="inputTitle" class="form-label fw-bold">Title of your Blog</label>
                    <input type="text" class="form-control" id="inputTitle" placeholder="Summarize your Travel Journey">
                </div>
                <div class="mb-3 col-10">
                    <label for="inputReview" class="form-label fw-bold">Your Review</label>
                    <input type="text" class="form-control" id="inputReview" placeholder="A detailed Blog of your Travel Journey. Travelers will love to know your experience">
                </div>
                <div class=" mb-3 col-md-5">
                    <label for="inputLocation" class="form-label fw-bold">Location</label>
                    <input type="text" class="form-control" id="inputLocation " placeholder="Enter Travel Location">
                </div>
                <div class=" mb-3 col-md-5">
                      <label for="inputCity" class="form-label fw-bold">When did You Travel?</label>
                      <select id="inputCity" class="form-select form-control">
                        <option disabled selected>Select One</option>
                        <option>Egypt</option>
                        <option> Brazil</option>
                        <option>China</option>
                        <option>Australia</option>
                        <option>france</option>
                        <option>Greece</option>
                        <option>Maldives</option>
                        <option>	Malaysia</option>
                        <option>	Italy</option>
                        <option>Nigeria</option>
                      </select>
                </div>
                <div class=" mb-3 col-10">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        I certify that the information in this review is based solely on my own experiences with the product or service in question. I also attest that I have no personal or professional affiliation with the business in question and have not been given any incentives or payment from the business to write this review. I am aware that fake reviews are strictly prohibited on Tripadvisor.
                    </label>
                  </div>
                </div>
                <div class=" mb-3 col-12">
                    <button type="submit" class=" rounded-3 border-1  fs-4  p-2">Submit Blog</button>
                </div>
            </form>

        </div>

    </div>

  
  `
})
export class TitRevComponent {

}
