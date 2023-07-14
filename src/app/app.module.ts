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
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UserResolverService } from './services/user-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptorService } from './interceptors/my-interceptor.service';

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
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
