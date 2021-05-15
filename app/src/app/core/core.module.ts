import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService, AppService, LoggerService } from './services'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppService,
    LoggerService,
    AccountService,
  ]
})
export class CoreModule { }
