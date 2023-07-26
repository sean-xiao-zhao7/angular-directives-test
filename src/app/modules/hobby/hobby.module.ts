import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { hobbyRoutes } from './routes/hobby.routes';
import { HobbyComponent } from './components/hobby/hobby.component';

const routes: Routes = hobbyRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes), HobbyComponent],
})
export class HobbyModule {}
