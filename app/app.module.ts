import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from './forms/login.component';
import { ContactsComponent } from './forms/contacts.comonent';
import { ReactiveLoginComponent } from './forms/reactive-login.component';

@NgModule({
  declarations: [
       ReactiveLoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [ReactiveLoginComponent]
})
export class AppModule { }
