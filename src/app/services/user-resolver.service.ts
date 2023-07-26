import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService  {
  constructor(private usersService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.usersService.getUser(route.params['name']);
  }
}
