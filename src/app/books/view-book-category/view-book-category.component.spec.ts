import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookCategoryComponent } from './view-book-category.component';

describe('ViewBookCategoryComponent', () => {
  let component: ViewBookCategoryComponent;
  let fixture: ComponentFixture<ViewBookCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
