import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BookListComponent } from './book-list/book-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookListComponent, SearchBarComponent],
  templateUrl: './book.component.html',
})
export class BookComponent {
  books: Book[] = [];
  loading: boolean = false;
  error: string | null = null;

  handleSearchResults(result: any[]): void {
    this.books = result;
    this.loading = false;
  }

  handleSearchError(error: string): void {
    this.error = error;
    this.loading = false;
  }

  handleSearchLoading(loading: boolean): void {
    this.loading = loading;
  }
}
