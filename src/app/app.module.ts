import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { UsersService } from './services/users.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [AppComponent, HighlightDirective, UnlessDirective],
  imports: [BrowserModule],
  providers: [UsersService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
