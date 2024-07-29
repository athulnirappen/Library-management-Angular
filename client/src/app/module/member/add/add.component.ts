import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  member: any = {}
  constructor(private api:ApiService,private router:Router) {
    
  }

  Add() {
    const { name, email, place, phone } = this.member
    
    if (!name || !email || !place || !phone) {
      alert('please fill the form completely')
    } else {
      this.api.addMember(this.member).subscribe({
        next:(res:any)=>{
          // console.log(res);
          this.router.navigateByUrl('/member/details')
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }
  }

  cancel() {
    this.member={}
  }


}
