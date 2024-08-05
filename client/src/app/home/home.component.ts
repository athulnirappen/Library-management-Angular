import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allBooks: any = [];
  filterCategory: any;
  searchKey: string = '';

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getallbooks();
  }

  getallbooks() {
    this.api.getAllBook().subscribe({
      next: (res: any) => {
        // console.log(res.books);
        this.allBooks = res.books;
        this.filterCategory = res.books;
        // console.log(this.allBooks);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  delete(id: any) {
    this.api.deleteBook(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.getallbooks();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  filterAssigned() {
    this.filterCategory = this.allBooks.filter((a: any) => {
      if (a.assignednames.length > 0) {
        return a;
      }
    });
  }

  filterunAssigned() {
    this.filterCategory = this.allBooks.filter((a: any) => {
      if (a.assignednames.length == 0) {
        return a;
      }
    });
  }

  resetAssigned() {
    this.filterCategory = this.allBooks.filter((a: any) => {
      if (a.assignednames) {
        return a;
      }
    });
  }
}
