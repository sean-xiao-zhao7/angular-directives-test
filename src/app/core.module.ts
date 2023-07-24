import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoggingService } from './services/logging.service';
import { MyInterceptorService } from './interceptors/my-interceptor.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

@NgModule({
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
})
export class CoreModule {}
