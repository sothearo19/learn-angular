import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap, switchMap } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @Output() searchResults = new EventEmitter<any[]>();
  @Output() searchError = new EventEmitter<string>();
  @Output() searchLoading = new EventEmitter<boolean>();
  searchControl = new FormControl('');

  constructor(private bookService: BookService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => {
          this.searchResults.emit([]); // Clear previous results when new search starts
          this.searchLoading.emit(true);
        }),
        switchMap((term) => this.bookService.fetchBooks(term!)), // Cancel previous request if a new one is made
      )
      .subscribe({
        next: (data) => {
          this.searchResults.emit(data.docs);
        },
        error: (error) => {
          this.searchError.emit(error.message || 'An error occurred');
        },
      });
  }
}
