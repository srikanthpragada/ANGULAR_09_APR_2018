import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { BindingComponent } from './binding.component';


@NgModule({
  declarations: [
     BindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
