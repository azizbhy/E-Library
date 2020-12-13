import { Component, OnInit } from '@angular/core';
import { OrdersModule } from 'src/app/orders/orders.module';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private booksService : BooksService) { }
  booksList : Books;

  ngOnInit(): void {
  }
   
  



  addNewBook(form){
    console.log(form.value);
  let newBook = {
    id : '',
    title : form.value.book_title,
    author : form.value.book_author,
    categorieId : form.value.book_catid,
    price : form.value.book_price,
    isAvailable : true,
    rating : form.value.book_rating,
    warranty : form.value.book_warranty,
    bookImg : form.value.book_img,
    description : form.value.book_description
  };
this.booksService.createBook(newBook).subscribe(data=>{
  console.log(data);
}); 
 

}

}
