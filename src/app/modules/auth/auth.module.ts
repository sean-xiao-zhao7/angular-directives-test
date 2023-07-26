import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

import { authRoutes } from './routes/auth.routes';
import { UIModule } from '../ui/ui.module';

const routes: Routes = authRoutes;

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    UIModule,
  ],
})
export class AuthModule {}
