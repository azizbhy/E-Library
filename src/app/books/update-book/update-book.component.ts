import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookId = 0;
  booksList : Books;
  constructor(private activatedRoute: ActivatedRoute,private booksService : BooksService) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;

      this.booksService.viewBook(this.bookId).subscribe(bookData=>{
        this.booksList = bookData;
        console.log(this.booksList);
      });
  });
  }

  updateBook(form){

    console.log(form);
    
    
    const updateBook = {
    id : form.value.id,
    title : form.value.title,
    author : form.value.author,
    categorieId : form.value.categorieId,
    price : form.value.price,
    isAvailable :  form.value.isAvailable,
    rating : form.value.rating,
    warranty : form.value.warranty,
    description : form.value.description,
  };
    this.booksService.updateBook(this.bookId, updateBook).subscribe(data=>{
      console.log(data);
    });

}
}
