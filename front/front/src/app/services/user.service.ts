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
  private getPatientByID = 'http://localhost:8080/api/patient'
  private updatePatient = "http://localhost:8080/api/updatePatient"
  private dataConsultation = "http://localhost:8080/consultation/Consultations"

  //consultation drte
  private updateimg2D = "http://localhost:8080/consultation/addimage2D"
  private updateimg1D = "http://localhost:8080/consultation/addimage1D"
  private updateimg3D = "http://localhost:8080/consultation/addimage3D"
  private updateimg4D = "http://localhost:8080/consultation/addimage4D"
  private updateimg5D = "http://localhost:8080/consultation/addimage5D"

  //gauche
  private updateimg1G = "http://localhost:8080/consultation/addimage1G"
  private updateimg2G = "http://localhost:8080/consultation/addimage2G"
  private updateimg3G = "http://localhost:8080/consultation/addimage3G"
  private updateimg4G = "http://localhost:8080/consultation/addimage4G"
  private updateimg5G = "http://localhost:8080/consultation/addimage5G"


  //get consultation
  private getconsultationID = "http://localhost:8080/consultation/Consultation"

  // islogin = false;
  // generaliste = false;
  // expert = false;
  // choixmenu: string = 'A';
  // listData: User[];


  constructor(private http: HttpClient) { }
  ajouterDataConsultation(id: number, cin: number): Observable<Object> {
    return this.http.post(`${this.dataConsultation}/${id}/${cin}`, {

    });
  }
  getPatient
    (id: number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.getPAtient}/${id}`, {

    });

  }
  getPatientConsult
    (id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.getPAtient}/${id}`, {

    });

  }
  patientID(id: number, cin: number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.getPatientByID}/${id}/${cin}`, {

    });
  }
  getConsultationID(id: number, idConsult: number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.getconsultationID}/${id}/${idConsult}`, {

    });
  }

  updatepatient(id: number, cin: number, value: any): Observable<Object> {
    return this.http.put(`${this.updatePatient}/${id}/${cin}`, value)


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
  // uploadImageConsultation(id: number, cin: number, file: File): Observable<Object[]> {
  //   return this.http.post<Object[]>(`${this.ajouterimageConsultation}/${id}/${cin}`, file);
  // }
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
    return this.http.get(`${this.imageGen}/${parseInt(localStorage.getItem("id"))}`);
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
    return this.http.post(`${this.baseUrl}`, info);

  }
  registerExpert(info: Object): Observable<Object> {
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

  // IMAGES CONSULTATION
  //droite
  updateImage2D(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg2D}/${id}`, file);
  }
  updateImage1D(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg1D}/${id}`, file);
  }
  updateImage3D(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg3D}/${id}`, file);
  }
  updateImage4D(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg4D}/${id}`, file);
  }
  updateImage5D(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg5D}/${id}`, file);
  }
  //GAUCHE

  updateImage1G(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg1G}/${id}`, file);
  }
  updateImage2G(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg2G}/${id}`, file);
  }
  updateImage3G(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg3G}/${id}`, file);
  }
  updateImage4G(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg4G}/${id}`, file);
  }
  updateImage5G(id: number, file: File): Observable<any> {
    return this.http.put(`${this.updateimg5G}/${id}`, file);
  }


}
