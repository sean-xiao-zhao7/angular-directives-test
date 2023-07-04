import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() userId: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  seeUserDetails(userId: string) {
    this.router.navigate([userId], { relativeTo: this.route });
  }

  editUser(userId: string) {
    this.router.navigate([userId, 'edit'], {
      relativeTo: this.route,
      queryParams: { time: new Date().toLocaleDateString() },
      fragment: 'test',
    });
  }
}
