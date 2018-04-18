import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { BooksService } from '../service/books.service'

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooksComponent implements OnInit {
    books: WebBook[];
    constructor(private booksService:BooksService) {
    }

    ngOnInit() {
       this.booksService.getAllBooks()
          .map(this.costlyBooks)
          .subscribe( result => this.books = result);
    }

    costlyBooks(books : WebBook[]) : WebBook[] 
    {
        var selectedBooks : WebBook[] = [];

        for( var book of books)
           if ( book.Price > 500)
                selectedBooks.push(book)

        return selectedBooks;
    }
}
