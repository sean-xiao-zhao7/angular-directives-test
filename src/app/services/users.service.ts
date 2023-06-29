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
}
