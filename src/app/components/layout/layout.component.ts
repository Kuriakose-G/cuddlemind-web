import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SidemenuComponent } from "../../shared/components/sidemenu/sidemenu.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidemenuComponent, RouterOutlet, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  showSidebar: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && !this.isLargeScreen()) {
        this.showSidebar = false;
      }
    });
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  isLargeScreen(): boolean {
    return window.innerWidth >= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isLargeScreen()) {
      this.showSidebar = true;
    } else {
      this.showSidebar = false;
    }
  }

  ngOnInit() {
    if (this.isLargeScreen()) {
      this.showSidebar = true;
    } else {
      this.showSidebar = false;
    }
  }
}
