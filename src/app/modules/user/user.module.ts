import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersService } from 'src/app/services/users.service';
import { UserResolverService } from 'src/app/services/user-resolver.service';

import { userRoutes } from './routes/user.routes';

const routes: Routes = userRoutes;

@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    EditUserComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [UsersService, UserResolverService],
})
export class UserModule {}
