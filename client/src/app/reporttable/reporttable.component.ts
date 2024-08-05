import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reporttable',
  templateUrl: './reporttable.component.html',
  styleUrls: ['./reporttable.component.css']
})
export class ReporttableComponent implements OnInit {
  allData: any = []
  

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAlldatas()
  }

  getAlldatas() {
    this.api.getAllBook().subscribe({
      next: (res: any) => {
        
        this.allData = res.books;
        // console.log(res);
        console.log("data",this.allData);
        
        
        

        
        // console.log(this.allData);
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  // getassignedNames(books:any) {
  //   let names: string[] = []
  //   for (let book of books) {
  //     if (book.assignednames && Array.isArray(book.assignednames)) {
  //       names.push(book.assignednames);
        
  //     }
      
  //   }

  //   return names
  // }

}
