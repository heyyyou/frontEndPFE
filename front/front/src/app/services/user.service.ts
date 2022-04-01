import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/users/signupGen";
  private baseUrll = "http://localhost:8080/api/users/signupExpert"
  private baseUrl1 = "http://localhost:8080/api/users/login";
  private getGen = "http://localhost:8080/api/generaliste";
  private getExpert = "http://localhost:8080/api/expert"
  private updateGen = "http://localhost:8080/medecins/update";
  private updateExpert = "http://localhost:8080/expert/update";
  private uploadImage = "http://localhost:8080/api/upload/"
  private imageProfil = "http://localhost:8080/api/image";

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
    return this.http.get(`${this.getGen}/${localStorage.getItem("id")}`);
  }
  getDataExpert(id: number): Observable<Object> {
    return this.http.get(`${this.getExpert}/${localStorage.getItem("id")}`);
  }

  registerMed(info: Object): Observable<Object> {
    this.generaliste = true;
    return this.http.post(`${this.baseUrl}`, info);

  }
  registerExpert(info: Object): Observable<Object> {
    this.expert = true;
    return this.http.post(`${this.baseUrll}`, info);
  }

  uploadimage(info: Object): Observable<Object> {
    this.expert = true;
    return this.http.post(`${this.uploadImage}`, info);
  }

  updatedataGeneraliste(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateGen}/${localStorage.getItem("id")}`, value);
  }
  updatedataExpert(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateExpert}/${localStorage.getItem("id")}`, value);
  }
  getImage(id: number): Observable<Object> {
    return this.http.get(`${this.imageProfil}/${localStorage.getItem("id")}`)
  }

  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


}
