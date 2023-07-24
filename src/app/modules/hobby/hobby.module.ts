import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { hobbyRoutes } from './routes/hobby.routes';
import { HobbyComponent } from './components/hobby/hobby.component';
import { UIModule } from '../ui/ui.module';

const routes: Routes = hobbyRoutes;

@NgModule({
  declarations: [HobbyComponent],
  imports: [ReactiveFormsModule, RouterModule.forChild(routes), UIModule],
})
export class HobbyModule {}
