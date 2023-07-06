import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { HomeComponent } from '../components/home/home.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UsersComponent } from '../components/users/users.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { EditUserCanDeactivateService } from '../services/edit-user-can-deactivate.service';
import { UserResolverService } from '../services/user-resolver.service';

export const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: ':userId',
        component: UserDetailsComponent,
        canActivateChild: [AuthGuardService],
        resolve: { user: UserResolverService },
      },
      {
        path: ':userId/edit',
        component: EditUserComponent,
        canActivateChild: [AuthGuardService],
        canDeactivate: [EditUserCanDeactivateService],
      },
    ],
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found. (404)' },
  },
  { path: '**', redirectTo: '/not-found' },
];
