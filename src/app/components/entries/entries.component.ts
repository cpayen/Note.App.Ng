import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: []
})
export class EntriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log(event);
        console.log(this.route.params);
      });
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    // });


    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //       //do something on start activity
    //   }

    //   if (event instanceof NavigationError) {
    //       // Handle error
    //       console.error(event.error);
    //   }

    //   if (event instanceof NavigationEnd) {
    //       //do something on end activity
    //   }
    // });
  }

}
