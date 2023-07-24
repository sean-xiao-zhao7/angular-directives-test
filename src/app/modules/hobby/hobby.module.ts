import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { hobbyRoutes } from './routes/hobby.routes';
import { HobbyComponent } from './components/hobby/hobby.component';

const routes: Routes = hobbyRoutes;

@NgModule({
  declarations: [HobbyComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class HobbyModule {}
