import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  booksList : Books;
  constructor(private booksService : BooksService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(data=>{
      this.booksList = data;
    });
  }

}
