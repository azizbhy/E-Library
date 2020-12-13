import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view-book-category',
  templateUrl: './view-book-category.component.html',
  styleUrls: ['./view-book-category.component.css']
})
export class ViewBookCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private booksService : BooksService) { }
   searchCategory : Category;
   booksList : Books;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
    this.searchCategory = data.id;

    this.booksService.searchCategoryBooks(this.searchCategory).subscribe(categoryData=> {
      this.booksList = categoryData;
    });
  });

  
  }

}
