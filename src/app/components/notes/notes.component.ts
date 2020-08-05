import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: []
})
export class NotesComponent implements OnInit {

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
