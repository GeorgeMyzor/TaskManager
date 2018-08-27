import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent, AboutComponent, MessagesComponent, PathNotFoundComponent, 
  CanDeactivateGuard, DialogService, MessagesService, AuthService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MessagesService, AuthService, CanDeactivateGuard, DialogService],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent, LoginComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
