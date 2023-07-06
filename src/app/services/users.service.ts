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

  addUser(name: string, email: string) {
    this.users.push(new User(name, email);
  }

  getUser(name: string) {
    const result = this.users.find((u) => u.getName() === name);
    if (!result) return { name: 'Not found', email: '' };
    return result;
  }
}
