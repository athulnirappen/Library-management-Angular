import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  book: any = {};
  members: any = [];
  sectionId: any;
  
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sectionId = this.route.snapshot.paramMap.get('id');
    // console.log(this.sectionId);
    this.getExistingBook();
    this.getmembers();
  }

  getmembers() {
    this.api.getAllMembers().subscribe({
      next: (res: any) => {
        // console.log(res.allMembers);
        this.members = res.allMembers;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getExistingBook() {
    this.api.getSingleBook(this.sectionId).subscribe({
      next: (res: any) => {
        console.log(res.singlebook);
        this.book = res.singlebook;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  

  update() {
    this.api.editBook(this.sectionId, this.book).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigateByUrl('');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  cancel() {
    this.getExistingBook();
  }
}
