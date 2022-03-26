import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/users/signup";
  private baseUrl1 = "http://localhost:8080/api/users/login";
  private baseUrl2 = "http://localhost:8080/api/users";
  islogin = false;
  generaliste = false;
  expert = false;
  choixmenu: string = 'A';
  listData: User[];
  constructor(private http: HttpClient) { }
  fetch() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }



  getToken() {
    return localStorage.getItem('token')
  }
  login(username, password) {
    return this.http.post(`${this.baseUrl1}`, { username, password });
  }

  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl2}/${localStorage.getItem("id")}`);
  }

  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }

  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


}
