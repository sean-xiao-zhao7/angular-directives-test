import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { HobbyComponent } from '../components/hobby/hobby.component';

export const hobbyRoutes = [
  {
    path: 'hobby',
    component: HobbyComponent,
    canActivate: [AuthGuardService],
  },
];
