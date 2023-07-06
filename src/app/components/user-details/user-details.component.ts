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
  user: { name: string; email: string } = { name: '', email: '' };
  private sub: Subscription;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.data.subscribe((data) => {
      this.user = data['user'];
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
