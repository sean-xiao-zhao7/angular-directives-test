import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userId: string = '';
  private paramsSub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.userId = params['userId'];
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
