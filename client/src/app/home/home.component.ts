import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBooks: any = []
  searchKey: string = ''
  
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getallbooks()
    
    
  }

  

  getallbooks() {
    this.api.getAllBook().subscribe({
      next:(res:any)=>{
        // console.log(res.books);
        this.allBooks=res.books
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
  }

  delete(id: any) {
    this.api.deleteBook(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.getallbooks()
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
    
  }

}
