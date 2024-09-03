import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'learn-angular';
}
