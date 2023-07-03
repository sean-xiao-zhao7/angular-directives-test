import { AppComponent } from '../app.component';
import { UsersComponent } from '../components/users/users.component';

export const appRoutes = [
  { path: '/', component: AppComponent },
  {
    path: '/users',
    component: UsersComponent,
  },
];
