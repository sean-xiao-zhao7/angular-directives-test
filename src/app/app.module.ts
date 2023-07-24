import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HobbyComponent } from './modules/hobby/components/hobby/hobby.component';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

import { UsersService } from './services/users.service';
import { LoggingService } from './services/logging.service';
import { UserResolverService } from './services/user-resolver.service';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { MyInterceptorService } from './interceptors/my-interceptor.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

import { appRoutes } from './routes/app.routes';

// modules
import { AuthModule } from './modules/auth/auth.module';

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
    ErrorPageComponent,
    HobbyComponent,
    ShortenPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [
    UsersService,
    LoggingService,
    EditUserComponent,
    UserResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
