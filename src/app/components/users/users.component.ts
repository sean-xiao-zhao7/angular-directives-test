import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: string[] = ['User 1', 'User 2'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
