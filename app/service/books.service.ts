import { Injectable } from '@angular/core';
import { WebBook } from '../http/WebBook';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {
     URL : string = "http://test.srikanthpragada.com/api/books"

     constructor(private http : HttpClient) {
     }

     getAllBooks() : Observable<WebBook[]>
     {
          return this.http.get<WebBook[]>(this.URL)
     }

}