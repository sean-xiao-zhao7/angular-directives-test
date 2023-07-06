import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
