import { AuthGuardService } from 'src/app/services/auth-guard.service';
// import { HobbyComponent } from '../components/hobby/hobby.component';
import { HobbySignalComponent } from '../signals/hobby/hobby-signal.component';

export const hobbyRoutes = [
  {
    path: '',
    component: HobbySignalComponent,
    canActivate: [AuthGuardService],
  },
];
