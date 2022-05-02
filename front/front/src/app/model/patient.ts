import { Generaliste } from './generaliste';
export interface Patient {
  id: Number;
  username: String;
  cin: Number;
  antecedant: any;
  dateNaiss: Date;
  email: String;
  gender: String;
  telephone: Number
  generaliste: Generaliste;
  image: String;
}
