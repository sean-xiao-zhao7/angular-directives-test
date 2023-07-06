import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService {
  users = [
    {
      name: 'Test',
      email: 'test@test.com',
    },
  ];

  constructor(private loggingService: LoggingService) {}

  addUser(name: string, email: string) {
    this.users.push({ name: name, email: email });
  }

  getUser(name: string) {
    const result = this.users.find((u) => u.name === name);
    if (!result) return { name: 'Not found', email: '' };
    return result;
  }
}
