import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { LoggingService } from './logging.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService implements OnInit {
  private users: User[] = [
    new User('User 1', 'user1@test.com'),
    new User('User 2', 'user2@test.com'),
    new User('User 3', 'user3@test.com'),
  ];
  alertSubject = new Subject<string>();

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  getUsers() {
    return this.users;
  }

  addUser(name: string, email: string) {
    this.users.push(new User(name, email));
  }

  getUser(name: string) {
    const targetUser = this.users.find((u) => u.getName() === name);
    if (!targetUser) {
      return new User('Not found', '');
    } else {
      return targetUser;
    }
  }
}
