import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuardService } from '../services/auth-guard.service';

export const appRoutes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'hobby',
    loadChildren: () =>
      import('src/app/modules/hobby/hobby.module').then(
        (module) => module.HobbyModule
      ),
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found. (404)' },
  },
  { path: '**', redirectTo: '/not-found' },
];
