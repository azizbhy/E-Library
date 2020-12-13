import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute ,private booksService : BooksService) { }
  bookId = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;

      this.booksService.deleteBook(this.bookId).subscribe(deleteBookData=>{{
           console.log('Deleted Book');
      }})
  });
  }

}
