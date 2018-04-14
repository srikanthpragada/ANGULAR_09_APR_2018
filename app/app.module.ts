import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConvertComponent } from './service/convert.component';
import { ConvertService } from './service/convert.service';

@NgModule({
  declarations: [
       ConvertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConvertService ],
  bootstrap: [ConvertComponent]
})
export class AppModule { }
