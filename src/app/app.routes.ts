import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// استيراد المكونات التي تريد توجيهها
import { HomeComponent } from '../components/pages/home/home.component';
import { DestinationsComponent } from '../components/pages/destinations/destinations.component';
import { BlogsComponent } from '../components/pages/blogs/blogs.component';
import { ReviewsComponent } from '../components/pages/reviews/reviews.component';
import { TravelTipsComponent } from '../components/pages/travel-tips/travel-tips.component';
import { AboutComponent } from '../components/pages/about/about.component';
import { ContactComponent } from '../components/pages/contact/contact.component';
import { SignUpComponent } from '../components/pages/sign-up/sign-up.component';
import { LoginComponent } from '../components/pages/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'travel-tips', component: TravelTipsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
