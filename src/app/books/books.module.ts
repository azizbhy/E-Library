import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ViewBookCategoryComponent } from './view-book-category/view-book-category.component';
import { FormsModule, NgForm , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      BooksComponent,
      CreateBookComponent,
      ViewBookComponent,
      ViewAllBooksComponent,
      UpdateBookComponent,
      DeleteBookComponent,
      ViewBookCategoryComponent
],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
