import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/books.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private booksService : BooksService) { }
  categoryList : Category;
  ngOnInit(): void {
    this.booksService.getCategories().subscribe(data =>{
       this.categoryList = data;
    });
  }

}
