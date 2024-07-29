import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SERVER_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }
  

  // member api
  
  addMember(details:any) {
    return this.http.post(`${this.SERVER_URL}/api/member/addmember`,details)
  }

  getAllMembers() {
    return this.http.get(`${this.SERVER_URL}/api/member/getmember`)
  }

  getsingleMember(id: any) {
    return this.http.get(`${this.SERVER_URL}/api/member/getsinglemember/${id}`)
  }

  editMember(id: any, data: any) {
    return this.http.put(`${this.SERVER_URL}/api/member/editmember/${id}`,data)
    
  }

  deleteMember(id: any) {
    return this.http.delete(`${this.SERVER_URL}/api/member/deletemember/${id}`)
    
  }

//bookapi

  Addbook(data:any) {
  return this.http.post(`${this.SERVER_URL}/api/books/addbook`,data)
}

  getAllBook() {
    return this.http.get(`${this.SERVER_URL}/api/books/allbook`)
  }

  getSingleBook(id:any) {
    return this.http.get(`${this.SERVER_URL}/api/books/getsinglebook/${id}`)
  }

  editBook(id: any, data: any) {
    return this.http.put(`${this.SERVER_URL}/api/books/editbook/${id}`,data)
    
  }

  deleteBook(id: any) {
    return this.http.delete(`${this.SERVER_URL}/api/books/deletebook/${id}`)
  }
}
