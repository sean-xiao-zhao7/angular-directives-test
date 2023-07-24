import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UserResolverService } from 'src/app/services/user-resolver.service';
import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { EditUserCanDeactivateService } from 'src/app/services/edit-user-can-deactivate.service';

export const userRoutes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: ':name',
        component: UserDetailsComponent,
        canActivateChild: [AuthGuardService],
        resolve: { user: UserResolverService },
      },
      {
        path: ':name/edit',
        component: EditUserComponent,
        canActivateChild: [AuthGuardService],
        canDeactivate: [EditUserCanDeactivateService],
      },
    ],
  },
];
