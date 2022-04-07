import { Patient } from './../model/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/medecin/signup";
  private baseUrll = "http://localhost:8080/expert/signup"
  private baseUrl1 = "http://localhost:8080/api/login";
  private getGen = "http://localhost:8080/medecin/getMedecin";
  private getExpert = "http://localhost:8080/expert/getExpert"
  private updateGen = "http://localhost:8080/medecin/update";
  private updateExpert = "http://localhost:8080/api/updateExpert";
  private uploadImage = "http://localhost:8080/api/upload/"
  private imageProfil = "http://localhost:8080/api/image";
  private ajoutPatient = "http://localhost:8080/api/addpatient"
  private ajoutAntecedant = "http://localhost:8080/api/addAntecedant"

  private imagePatient = "http://localhost:8080/api/updateImage"
  // private getImage = 'http://localhost:8080/api/getImageGeneraliste';
  private updateExpertt = 'http://localhost:8080/expert/update';
  // private getImage = 'http://localhost:8080/expert/getImage';
  private image = 'http://localhost:8080/expert/updateImage';
  private imageGen = 'http://localhost:8080/medecin/updateImage';
  private getPAtient = 'http://localhost:8080/api/patiente'
  private deletePatientd = 'http://localhost:8080/api/deletepatient'

  islogin = false;
  generaliste = false;
  expert = false;
  choixmenu: string = 'A';
  // listData: User[];


  constructor(private http: HttpClient) { }
  getPatient
    (id: number): Observable<Object> {
    return this.http.get(`${this.getPAtient}/${id}`, {

    });

  }
  deletePatient(id: number, cin: number): Observable<Object> {
    return this.http.delete(`${this.deletePatientd}/${id}/${cin}`, {

    });
  }

  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateExpertt}/${id}`, value);
  }
  updateImage(id: number, file: File): Observable<any> {
    return this.http.put(`${this.image}/${id}`, file);
  }
  updateImageGen(id: number, file: File): Observable<any> {
    return this.http.put(`${this.imageGen}/${id}`, file);
  }
  updateImagePatient(cin: number, file: File): Observable<any> {
    return this.http.put(`${this.imagePatient}/${cin}`, file)
  }

  fetch() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }

  getImageGen(id: number): Observable<Object> {
    return this.http.get(`${this.imageGen}/${localStorage.getItem("id")}`);
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
  ajouterPatient(patient: Patient, id: number): Observable<Object> {
    return this.http.post(`${this.ajoutPatient}`, {
      cin: patient.cin,

      antecedant: patient.antecedant,
      dateNaiss: patient.dateNaiss,
      email: patient.email,
      gender: patient.gender,
      telephone: patient.telephone,
      username: patient.username,
      generaliste: { id },
      image: patient.image

    }

    );


  }
  // public addPatient(patient: Patient, id: number): Observable<void> {
  //   return this.http.post<void>(this.url + "/addPat", {
  //     cin: patient.name,
  //     adresse: patient.adresse,
  //     number: patient.number,
  //     maladie: patient.maladie,
  //     med: {  },
  //   }, httpOptions);
  // }
  uploadimage(info: Object): Observable<Object> {
    this.expert = true;
    return this.http.post(`${this.uploadImage}`, info);
  }
  // getImageExpert(id: number): Observable<any> {
  //   return this.http.get(`${this.getImage}/${id}`);
  // }
  // updateImage(id: number, file: File): Observable<any> {
  //   return this.http.put(`${this.imageGen}/${id}`, file);
  // }

  updatedataGeneraliste(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateGen}/${localStorage.getItem("id")}`, value);
  }
  // updatedataExpert(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.updateExpert}/${localStorage.getItem("id")}`, value);
  // }
  // getImage(id: number): Observable<Object> {
  //   return this.http.get(`${this.imageProfil}/${localStorage.getItem("id")}`)
  // }

  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


}
