import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { hobbyRoutes } from './routes/hobby.routes';
import { HobbyComponent } from './components/hobby/hobby.component';

const routes: Routes = hobbyRoutes;

@NgModule({
  declarations: [HobbyComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class HobbyModule {}
