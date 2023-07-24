import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, ModalComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, ModalComponent],
})
export class UIModule {}
