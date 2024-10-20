import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// استيراد المكونات التي تريد توجيهها
import { HomeComponent } from '../components/pages/home';
import { DestinationsComponent } from './destinations/destinations.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
