import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() userId: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeUserDetails(userId: string) {
    this.router.navigate(['/users', userId]);
  }

  editUser(userId: string) {
    this.router.navigate(['/users', userId, 'edit'], {
      queryParams: { time: new Date().toLocaleDateString() },
      fragment: 'test',
    });
  }
}
