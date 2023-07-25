import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { appRoutes } from './routes/app.routes';

// modules
import { AuthModule } from './modules/auth/auth.module';
import { UIModule } from './modules/ui/ui.module';
import { CoreModule } from './core.module';

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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

    AuthModule,
    CoreModule,
    UIModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
