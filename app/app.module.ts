import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { BindingComponent } from './binding.component';
import { DirectivesComponent } from './directives.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';


@NgModule({
  declarations: [
     BindingComponent, 
     CourseComponent, 
     DirectivesComponent,
     PipesDemoComponent,
     BracketsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent]
})
export class AppModule { }
