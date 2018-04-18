import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { NgModule } from '@angular/core';
import { WebBooksComponent } from './http/webbooks.component';
import { HttpGitComponent } from './http/httpgit.component';
import { BooksService } from './service/books.service';

@NgModule({
  declarations: [
       WebBooksComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [ BooksService ],
  bootstrap: [ WebBooksComponent]
})
export class AppModule { }
