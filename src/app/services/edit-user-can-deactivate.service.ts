import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EditUserComponent } from '../modules/user/components/edit-user/edit-user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditUserCanDeactivateService
  
{
  constructor() {}

  canDeactivate(
    component: EditUserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.allowNavAway;
  }
}
