import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountTypeComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
