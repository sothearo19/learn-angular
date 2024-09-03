import { Component, Input } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-list',
  standalone: true,
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  private coverUrl = 'https://covers.openlibrary.org/b/id';
  @Input() books: Book[] = [];
  @Input() loading: boolean = false;
  @Input() error: string | null = null;

  getBookCover(coverId: number): string {
    return `${this.coverUrl}/${coverId}-M.jpg`;
  }
}
