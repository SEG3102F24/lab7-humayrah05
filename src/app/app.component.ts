import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet, FormsModule, NgClass]
})
export class AppComponent {
  title = 'book-store';
}
