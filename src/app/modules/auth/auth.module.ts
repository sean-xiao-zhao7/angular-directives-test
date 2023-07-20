import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from 'src/app/components/ui/loading-spinner/loading-spinner.component';
import { ModalComponent } from 'src/app/components/ui/modal/modal.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    LoginComponent,
    LogoutComponent,
    ModalComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [LoginComponent, RegisterComponent, LogoutComponent],
})
export class AuthModule {}
