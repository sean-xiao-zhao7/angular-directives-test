import { Injectable, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService implements OnInit {
  private users: User[] = [];

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.addUser('User 1', 'user1@test.com');
    this.addUser('User 2', 'user2@test.com');
    this.addUser('User 3', 'user3@test.com');
  }

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
