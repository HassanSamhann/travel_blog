import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from "../components/main/main.component";
import { AboutComponents } from "../components/about/about.component";
import { ActivitiesComponent } from "../components/activities/activities.component";
import { FooterComponent } from "../components/footer/footer.component";
import { TeamComponent } from "../components/team/team.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, MainComponent, AboutComponents, ActivitiesComponent, FooterComponent, TeamComponent, RouterModule, CommonModule],
  styleUrl: './app.component.css',
  template: `
    <app-header *ngIf="showHeaderFooter()"></app-header>  
    <router-outlet></router-outlet>
    <app-footer *ngIf="showHeaderFooter()"></app-footer>
  `
})
export class AppComponent {
  title = 'travel_blog';

  constructor(private router: Router) {}

  showHeaderFooter(): boolean {
    // تحقق من المسار الحالي؛ إذا كان /landing فلا تعرض الهيدر والفوتر
    return this.router.url !== '/';
  }
}
