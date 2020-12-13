import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { ViewBookCategoryComponent } from './view-book-category/view-book-category.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  { path: '', component: ViewAllBooksComponent },
  { path: 'create-book', component: CreateBookComponent},
  { path: 'view-book/:id', component: ViewBookComponent},
  { path: 'delete-book/:id', component: DeleteBookComponent},
  { path: 'update-book/:id', component: UpdateBookComponent},
  { path: 'view-book-category/:id', component:ViewBookCategoryComponent},
  { path: 'view-all-books', component:ViewAllBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
