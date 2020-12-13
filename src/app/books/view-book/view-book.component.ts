import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  bookId = 0;
  booksList : Books;
  constructor(private activatedRoute: ActivatedRoute , private booksService : BooksService) { }
  
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
        this.bookId = data.id;
    });
    this.booksService.viewBook(this.bookId).subscribe(bookData => {
         this.booksList = bookData;
    });
  }

}
