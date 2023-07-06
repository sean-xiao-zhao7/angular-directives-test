import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService
  implements Resolve<{ name: string; email: string }>
{
  constructor(private usersService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | { name: string; email: string }
    | Observable<{ name: string; email: string }>
    | Promise<{ name: string; email: string }> {
    return this.usersService.getUser(route.params['name']);
  }
}
