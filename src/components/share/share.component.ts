import { Component } from '@angular/core';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [],
  styleUrl: './share.component.css',
  template: `
  <header >
    <div class="container-fluid">
        <h1 class="mainBlogTitle"> <span class="spanyellow">Share</span>  your <span class="spanyellow">Travel</span>  Experience in form of a <span class="spanyellow">story</span></h1>
    </div>
</header>
<!-- blog content -->
<section class="container-fluid mt-2  ">
    <!-- sub title -->
    <div class="container m-auto  p-3 hstack justify-content-between">
        <div>
            <h3 class="blogTitle">latest blog</h3>
        </div>
        <div class="text-center">
            <button class="blogBtn w-auto p-3">
                <i class="fa-solid fa-pen fa-lg"></i>
                Write New Review</button>
        </div>
    </div>
    <!-- blog posts -->
    <div class="container-fluid">
        <div class="row">
            <!-- left side -->
            <div class="col-lg-8">
                <div class="row"> 
                    <div class="col-sm-12  mt-5 mb-4">
                            <div class="blogPost hstack">
                                <div class="w-100 row-sm-12 row-md-6">
                                    <img src="./images/pexels-pixabay-163194.png" alt="Old Camera on a Map" class="blogPostImg">
                                </div>           
                                <div class=" p-3 row-sm-12 row-md-6">
                                <h3 class="postTitle">13 Things I'd Tell Any New Traveler</h3>
                                <p class="fw-semibold"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                                <div class="w-50  d-flex justify-content-between align-items-center">
                                    <p class="text-secondary "><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                                    <p class="spanyellow"> 50 comments</p>
                                </div>       
                                <p class="text-secondary">Discover breathtaking destinations and thrilling experiences! Our blog provides tips and stories to inspire your next adventure, whether you're a seasoned traveler or a newbie.</p>
                                <a href="#" class="readMore text-decoration-none spanyellow text-capitalize">READ MORE...</a>
                                </div>
                            </div>
                    </div>
                    <div class="col-sm-12  mt-5 mb-4">
                        <div class="blogPost hstack">
                            <div class="w-100 row-sm-12 row-md-6">
                                <img src="./images/pexels-kelly-1179532-2928258.png" alt="Old Camera on a Map" class="blogPostImg">
                            </div>           
                            <div class=" p-3 row-sm-12 row-md-6">
                            <h3 class="postTitle">Culinary Journeys: Tasting the World</h3>
                            <p class="fw-semibold"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                            <div class="w-50  d-flex justify-content-between align-items-center">
                                <p class="text-secondary "><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                                <p class="spanyellow"> 50 comments</p>
                            </div>       
                            <p class="text-secondary">Savor the flavors of global cuisine! Join us as we explore food markets, local delicacies, and culinary traditions that make each destination unique..</p>
                            <a href="#" class="readMore text-decoration-none spanyellow text-capitalize">READ MORE...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12  mt-5 mb-4">
                        <div class="blogPost hstack">
                            <div class="w-100 row-sm-12 row-md-6">
                                <img src="./images/pexels-ekrulila-2203056.png" alt="Old Camera on a Map" class="blogPostImg">
                            </div>           
                            <div class=" p-3 row-sm-12 row-md-6">
                            <h3 class="postTitle">Cultural Escapes: Discovering Heritage</h3>
                            <p class="fw-semibold"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                            <div class="w-50  d-flex justify-content-between align-items-center">
                                <p class="text-secondary "><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                                <p class="spanyellow"> 50 comments</p>
                            </div>       
                            <p class="text-secondary">Dive into the rich tapestry of cultures around the world! Our blog highlights festivals, traditions, and historic sites that showcase the diversity of human experience.</p>
                            <a href="#" class="readMore text-decoration-none spanyellow text-capitalize">READ MORE...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12  mt-5 mb-4">
                        <div class="blogPost hstack">
                            <div class="w-100 row-sm-12 row-md-6">
                                <img src="./images/pexels-vlada-karpovich-7368300.png" alt="Old Camera on a Map" class="blogPostImg">
                            </div>           
                            <div class=" p-3 row-sm-12 row-md-6">
                            <h3 class="postTitle">Nature: Exploring the Great Outdoors</h3>
                            <p class="fw-semibold"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                            <div class="w-50  d-flex justify-content-between align-items-center">
                                <p class="text-secondary "><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                                <p class="spanyellow"> 50 comments</p>
                            </div>       
                            <p class="text-secondary">Embrace the beauty of nature! Follow us on a journey through stunning landscapes, from mountains to beaches, with tips for outdoor adventures and conservation efforts.</p>
                            <a href="#" class="readMore text-decoration-none spanyellow text-capitalize">READ MORE...</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>     
            <!-- right side -->
            <div class="col-lg-4 ">
                <div class="RblogPost pb-2">
                    <div>
                        <h6 class="RBlogPostTitle">latest blog</h6>
                    </div>
                    <div class=" hstack  p-2">
                        <div class=" ps-2">
                            <img src="./images/pexels-pixabay-70361.png" alt="Old Camera on a Map" class="w-100">
                        </div>           
                        <div class="ps-2">
                        <h6 class="postTitle mb-1"></h6><p>13 Things I'd Tell Any New Traveler</p>
                        <p class="mb-1"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                        <div class="w-100  d-flex justify-content-between align-items-center  ">
                            <p class="text-secondary mb-0"><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                            <p class="spanyellow mb-0"> 50 comments</p>
                        </div>   
                        </div>       
                    </div>
                    <div class=" hstack p-2 ">
                        <div class=" ps-2">
                            <img src="./images/pexels-nappy-1058958.png" alt="Old Camera on a Map" class="w-100 ">
                        </div>           
                        <div class=" ps-2">
                        <h6 class="postTitle mb-1">13 Things I'd Tell Any New Traveler</h6>
                        <p class=" mb-1"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                        <div class="w-100  d-flex justify-content-between align-items-center">
                            <p class="text-secondary mb-0 "><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                            <p class="spanyellow mb-0"> 50 comments</p>
                        </div>       
                        </div>
                    </div>
                    <div class=" hstack p-2 ">
                        <div class=" ps-2">
                            <img src="./images/pexels-pixabay-532803.png" alt="Old Camera on a Map" class="w-100">
                        </div>           
                        <div class=" ps-2">
                        <h6 class="postTitle mb-1">13 Things I'd Tell Any New Traveler</h6>
                        <p class="fw-semibold mb-1"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                        <div class="w-100  d-flex justify-content-between align-items-center">
                            <p class="text-secondary "><span class=" text-decoration-underline mb-0">10 Nov</span> , 2020 </p>
                            <p class="spanyellow mb-0"> 50 comments</p>
                        </div>       
                        </div>
                    </div>
                    <div class=" hstack p-2 ">
                        <div class=" ps-2">
                            <img src="./images/pexels-jaime-reimer-1376930-2749500.png" alt="Old Camera on a Map" class="w-100">
                        </div>           
                        <div class=" ps-2">
                        <h6 class="postTitle mb-1">13 Things I'd Tell Any New Traveler</h6>
                        <p class="fw-semibold mb-1"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                        <div class="w-100  d-flex justify-content-between align-items-center">
                            <p class="text-secondary "><span class=" text-decoration-underline mb-0">10 Nov</span> , 2020 </p>
                            <p class="spanyellow mb-0"> 50 comments</p>
                        </div>       
                        </div>
                    </div>
                    <div class=" hstack p-2 ">
                        <div class=" ps-2">
                            <img src="./images/pexels-catchavibe-2212570.png" alt="Old Camera on a Map" class="w-100">
                        </div>           
                        <div class=" ps-2">
                        <h6 class="postTitle mb-1">13 Things I'd Tell Any New Traveler</h6>
                        <p class="fw-semibold mb-1"> <span class="spanyellow text-decoration-underline">Post</span> <span class="spanBlue">By</span>  Adam Smith</p>
                        <div class="w-100  d-flex justify-content-between align-items-center">
                            <p class="text-secondary  mb-0"><span class=" text-decoration-underline">10 Nov</span> , 2020 </p>
                            <p class="spanyellow mb-0"> 50 comments</p>
                        </div>       
                        </div>
                    </div>
                </div>
                <div class="rSubscribe p-4 mt-5 rounded-4"> 
                    <h3 class="fw-bold">Subscribe today</h3>
                    <p class="text-white">
                        Subscribe for the latest travel tips and destination guides. Stay updated with exclusive offers and insights delivered directly to your inbox! Join us today!
                    </p>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Fullname">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Your Email">
                    </div>
                    <div class="mb-3">
                        <input class="form-check-input" type="checkbox" id="gridCheck1">
                        <label class="form-check-label" for="gridCheck1">You agree to our company privacy policy</label>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn spanyellow w-100 bg-white fs-4">Subscribe</button>
                    </div>




                </div>
                <div class="blogTag RblogPost mt-3 p-3 mb-4">
                    <div>
                        <h6 class="RBlogPostTitle">Tag</h6>
                    </div>
                        <div class="row row-cols-3 p-2 spanyellow ">
                            <div class="col p-2">#Wanderlust</div>
                          <div class="col p-2">#NatureLovers</div>
                          <div class="col p-2">#ExploreTheWorld</div>
                          <div class="col p-2">#TravelStories</div>
                          <div class="col p-2">#HiddenGems</div>
                          <div class="col p-2">#BeachGetaway</div>
                          <div class="col p-2">#TravelInspiration</div>
                          <div class="col p-2">#CityExploration</div>
                          <div class="col p-2">#TravelPhotography</div>
                          <div class="col p-2">#LuxuryTravel</div>
                          <div class="col p-2">#SoloTravel</div>
                          <div class="col p-2">#CulturalExperiences</div>
                          <div class="col p-2">#TravelStories</div>
                          <div class="col p-2">#HiddenGems</div>
                          <div class="col p-2">#BeachGetaway</div>
                          <div class="col p-2">#TravelInspiration</div>
                          <div class="col p-2">#CityExploration</div>
                          <div class="col p-2">#TravelPhotography</div>
                          <div class="col p-2">#LuxuryTravel</div>
                          <div class="col p-2">#SoloTravel</div>
                          <div class="col p-2">#CulturalExperiences</div>
                        </div>
                   

                </div>
            </div>                 
        </div>
    </div>
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
</section>
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
            
                <div class="  col-10">
                    <label for="inputTitle" class="form-label fw-bold">Title of your Blog</label>
                    <input type="text" class="form-control" id="inputTitle" placeholder="Summarize your Travel Journey">
                </div>
                <div class=" col-10">
                    <label for="inputReview" class="form-label fw-bold">Your Review</label>
                    <input type="text" class="form-control" id="inputReview" placeholder="A detailed Blog of your Travel Journey. Travelers will love to know your experience">
                </div>
                <div class="col-md-5">
                    <label for="inputLocation" class="form-label fw-bold">Location</label>
                    <input type="text" class="form-control" id="inputLocation " placeholder="Enter Travel Location">
                </div>
                <div class="col-md-5">
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
                <div class="col-10">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        I certify that the information in this review is based solely on my own experiences with the product or service in question. I also attest that I have no personal or professional affiliation with the business in question and have not been given any incentives or payment from the business to write this review. I am aware that fake reviews are strictly prohibited on Tripadvisor.
                    </label>
                  </div>
                </div>
                <div class="col-12">
                    <button type="submit" class=" rounded-3 border-1  fs-4  p-2">Submit Blog</button>
                </div>
            </form>

        </div>

    </div>


</section>


  
  `,
})
export class ShareComponent {}
