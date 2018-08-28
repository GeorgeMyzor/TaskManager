import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent]
})
export class SharedModule { }
