import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UsersComponent } from '../components/users/users.component';

export const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':userId',
        component: UserDetailsComponent,
      },
      {
        path: ':userId/edit',
        component: EditUserComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
