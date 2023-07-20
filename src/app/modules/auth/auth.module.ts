import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingSpinnerComponent } from 'src/app/components/ui/loading-spinner/loading-spinner.component';
import { ModalComponent } from 'src/app/components/ui/modal/modal.component';

import { authRoutes } from './routes/auth.routes';

const routes: Routes = authRoutes;

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    LoginComponent,
    LogoutComponent,
    ModalComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [LoginComponent, RegisterComponent, LogoutComponent],
})
export class AuthModule {}
