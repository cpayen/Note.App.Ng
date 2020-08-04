import { Component } from '@angular/core';
import { User } from './models';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="currentUser">
      <div class="navbar-nav">
        <a class="nav-item nav-link" routerLink="/">Home</a>
        <a class="nav-item nav-link" (click)="logout()">Logout</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
