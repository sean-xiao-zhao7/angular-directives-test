import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { UsersService } from './services/users.service';
import { LoggingService } from './services/logging.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditUserCanDeactivateComponent } from './services/edit-user-can-deactivate/edit-user-can-deactivate.component';

const routes: Routes = appRoutes;

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    UsersComponent,
    HomeComponent,
    UserComponent,
    UserDetailsComponent,
    EditUserComponent,
    NotFoundComponent,
    EditUserCanDeactivateComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [UsersService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
