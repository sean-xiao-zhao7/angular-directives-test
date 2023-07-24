import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

import { LoggingService } from './services/logging.service';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { MyInterceptorService } from './interceptors/my-interceptor.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

import { appRoutes } from './routes/app.routes';

// modules
import { AuthModule } from './modules/auth/auth.module';
import { HobbyModule } from './modules/hobby/hobby.module';
import { UserModule } from './modules/user/user.module';
import { UIModule } from './modules/ui/ui.module';

const routes: Routes = appRoutes;

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    HomeComponent,
    NotFoundComponent,
    ErrorPageComponent,
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
    HobbyModule,
    UserModule,
    UIModule,
  ],
  providers: [
    LoggingService,
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
