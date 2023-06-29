import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    {
      name: 'Test',
      email: 'test@test.com',
    },
  ];

  constructor() {}

  addUser(name: string, email: string) {
    this.users.push({ name: name, email: email });
  }
}
