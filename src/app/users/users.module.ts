import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule, usersRouterComponents  } from './users-routing.module';
import { SharedModule } from './../shared/shared.module';

import { UserComponent, UserArrayService, UserResolveGuard } from '.';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    usersRouterComponents,
    UserComponent
  ],
  providers: [
    UserArrayService,  
    UserResolveGuard
  ]  
})
export class UsersModule { }
