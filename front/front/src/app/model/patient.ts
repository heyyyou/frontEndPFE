import { Generaliste } from './generaliste';
export interface Patient {
  cin: Number;
  antecedant: any;
  dateNaiss: Date;
  email: String;
  gender: String;
  telephone: Number
  username: String;
  generaliste: Generaliste;
  image: String;
}
