import { HomeComponent } from '../components/home/home.component';
import { UsersComponent } from '../components/users/users.component';

export const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
];
