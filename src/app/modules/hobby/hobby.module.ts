import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { hobbyRoutes } from './routes/hobby.routes';
import { HobbyComponent } from './components/hobby/hobby.component';
import { HobbySignalComponent } from './signals/hobby/hobby-signal.component';

const routes: Routes = hobbyRoutes;

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HobbyComponent,
    HobbySignalComponent,
  ],
})
export class HobbyModule {}
