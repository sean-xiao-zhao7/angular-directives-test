import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService
  implements Resolve<{ name: string; email: string }>
{
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | { name: string; email: string }
    | Observable<{ name: string; email: string }>
    | Promise<{ name: string; email: string }> {

    }
}
