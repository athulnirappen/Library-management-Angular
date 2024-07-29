import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  member: any = {}
  sectionId:any
  
  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.sectionId=this.route.snapshot.paramMap.get('id')
    console.log(this.sectionId);
    this.getExistingmember()
    
  }

  getExistingmember() {
    this.api.getsingleMember(this.sectionId).subscribe({
      next: (res: any) => {
        // console.log(res.singlemember);
        this.member = res.singlemember;
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
   })
  }

  update() {
    this.api.editMember(this.sectionId, this.member).subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.router.navigateByUrl('/member/details')
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
  }

  cancel() {
    this.getExistingmember()
  }

}
