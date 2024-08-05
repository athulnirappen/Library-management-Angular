import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  allMembers: any = []
  searchKey:string=''

  constructor(private api:ApiService) {
    
  }
  ngOnInit(): void {
    this.getAllmembers()
  }

  getAllmembers() {
    this.api.getAllMembers().subscribe({
      next: (res: any) => {
        // console.log(res.allMembers);
        this.allMembers = res.allMembers;
        
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
  }

  delete(id: any) {
    this.api.deleteMember(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.getAllmembers()
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
    
  }

}
