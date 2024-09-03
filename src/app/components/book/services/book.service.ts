import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  fetchBooks(searchTerm: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/search.json?q=${searchTerm}&limit=10`,
    );
  }
}
