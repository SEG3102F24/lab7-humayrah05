import { Component, NgModule } from '@angular/core';
import { BooksService } from 'src/app/books/service/books.service'; 
import { Author } from 'src/app/books/model/book';
import {Subscription} from "rxjs";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  imports: [FormsModule, NgIf],
  standalone: true,
})

export class AuthorsComponent {
  id: number | null = null;
  author: Author | null = null;
  errorMessage: string = '';
  private subscription!: Subscription;

  constructor(private booksService: BooksService) {}

  getAuthor() {
    if (this.id !== null) {
      this.booksService.getAuthorById(this.id)
        .subscribe({
          next: (data: Author) => {
            this.author = data; 
            this.errorMessage = '';
          },
          error: (err) => {
            this.author = null; 
            this.errorMessage = 'Author not found.'; 
          }
        });
    }
  }
  
}
