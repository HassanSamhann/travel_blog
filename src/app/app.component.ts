import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from "../components/main/main.component";
import { AboutComponents } from "../components/about/about.component";
import { ActivitiesComponent } from "../components/activities/activities.component";
import { FooterComponent } from "../components/footer/footer.component";
import { TeamComponent } from "../components/team/team.component";
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, MainComponent, AboutComponents, ActivitiesComponent, FooterComponent, TeamComponent, RouterModule, CommonModule],
  styleUrl: './app.component.css',
  template: `
    <app-header *ngIf="showHeaderFooter"></app-header>  
    <router-outlet></router-outlet>
    <app-footer *ngIf="showHeaderFooter"></app-footer>
  `
})
export class AppComponent implements OnInit {
  showHeaderFooter = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const hideForRoutes = ['/login', '/sign-up','/']; // حدد المسارات التي لا تريد عرض الهيدر والفوتر فيها
      this.showHeaderFooter = !hideForRoutes.includes(event.url);
    });
  }
}