import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { hobbyRoutes } from './routes/hobby.routes';
import { UIModule } from '../ui/ui.module';
import { HobbyComponent } from './components/hobby/hobby.component';

const routes: Routes = hobbyRoutes;

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    UIModule,
    HobbyComponent,
  ],
})
export class HobbyModule {}
