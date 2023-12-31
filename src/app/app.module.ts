import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

// custom components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

// custom routes
import { appRoutes } from './routes/app.routes';

// custom modules
import { AuthModule } from './modules/auth/auth.module';
import { UIModule } from './modules/ui/ui.module';
import { CoreModule } from './core.module';

// custom reducers
import { hobbyReducer } from './store/reducers/hobby.reducer';
import { EffectsModule } from '@ngrx/effects';

// custom effects
import { HobbyEffects } from './store/effects/hobby.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

const routes: Routes = appRoutes;

@NgModule({
  declarations: [AppComponent, NotFoundComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
    }),
    BrowserAnimationsModule,

    AuthModule,
    CoreModule,
    UIModule,
    StoreModule.forRoot({ hobbyReducer: hobbyReducer }, {}),
    EffectsModule.forRoot([HobbyEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
