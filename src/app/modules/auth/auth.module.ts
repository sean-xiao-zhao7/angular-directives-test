import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authRoutes } from './routes/auth.routes';

const routes: Routes = authRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthModule {}
