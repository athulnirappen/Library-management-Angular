import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  book: any = {}
  constructor(private api:ApiService,private router:Router){}

  addbook() {
    const { bookname, bookimage, authorname, numberofcopies } = this.book;
    if (!bookname || !bookimage || !authorname || !numberofcopies) {
      alert('please fill the form')
      
    } else {
      this.api.Addbook(this.book).subscribe({
        next: (res: any) => {
          // console.log(res);
          this.router.navigateByUrl('')
          
        },
        error: (err: any) => {
          console.log(err);
          
        }
      })
    }
  }

  cancel() {
    this.book={}
  }

}
