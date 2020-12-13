import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Books} from './books'
import { Observable } from 'rxjs';
import {Category} from'../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }
  
  createBook(bookBody) : Observable<Books> {
    const bookurl = 'http://localhost:3000/books';
    return this.httpClient.post<Books>(bookurl,bookBody);
  }

  viewBook(bookId): Observable<Books> {
    const bookurl = 'http://localhost:3000/books/'+bookId;
    return this.httpClient.get<Books>(bookurl);
  }

  updateBook(bookId,productBody): Observable<Books> {
    const bookurl = 'http://localhost:3000/books/' +bookId;
    return this.httpClient.put<Books>(bookurl,productBody);
  }

  deleteBook(bookId): Observable<Books>{
    const bookurl = 'http://localhost:3000/books/'+bookId;
    return this.httpClient.delete<Books>(bookurl);
    
  }

  viewBookCategory(categoryId) : Observable<Books>{
    const bookurl = 'http://localhost:3000/category='+categoryId;
    return this.httpClient.get<Books>(bookurl);
  }

  getCategories() : Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  getAllBooks() : Observable<Books>{
    const bookUrl = 'http://localhost:3000/books';
    return this.httpClient.get<Books>(bookUrl);
  }

  searchCategoryBooks(categoryId) : Observable<Books>{
    const bookurl = 'http://localhost:3000/books?categorieId='+categoryId;
    return this.httpClient.get<Books>(bookurl);
  }

}
