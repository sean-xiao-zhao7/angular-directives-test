import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  alertedUsername: string = '';
  alertedUsernameSubject: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.alertedUsernameSubject = this.usersService.alertSubject.subscribe(
      (name: string) => {
        this.alertedUsername = name;
      }
    );
  }

  ngOnDestroy(): void {
    this.alertedUsernameSubject.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
