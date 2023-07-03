import { HomeComponent } from '../components/home/home.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UsersComponent } from '../components/users/users.component';

export const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:userId',
    component: UserDetailsComponent,
  },
];
