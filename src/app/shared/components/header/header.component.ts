import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();

  currentLabel: string = '';

  private routeLabels: { [key: string]: string } = {
    '/dashboard': 'Dashboard',
    '/alllist': 'Users',
    '/bookings': 'Bookings',
    '/plans': 'Cuddle Plans',
    '/chat': 'Chat'
  };

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentLabel(event.urlAfterRedirects);
      }
    });
  }

  setCurrentLabel(url: string) {
    const matchedPath = Object.keys(this.routeLabels).find(path => url.startsWith(path));
    this.currentLabel = matchedPath ? this.routeLabels[matchedPath] : '';
  }

  onToggleSidebar() {
    this.toggle.emit();
  }
}
