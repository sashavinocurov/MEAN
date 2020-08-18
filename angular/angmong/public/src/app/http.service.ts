import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPetsFromDb() {
    console.log("All Pets DB @@@@@@@@@@");
    return this._http.get(`/api/pets`);
  }

  getOnePetFromDb(id) {
    console.log("Pet Db @@@@@@@@@@");
    return this._http.get(`/api/pet@{id}`);
  }

  addPetToDb(pet) {
    console.log("Add Pet Db @@@@@@@@@");
    return this._http.post(`/api/pet`, pet);
  }

  editPetInDb(id, pet) {
    console.log("Edit pet Db @@@@@@@@@@@@");
    return this._http.patch(`/api/pet/${id}`, pet);
  }

  deletePetFromDb(id){
    console.log("Delet pet Db @@@@@@@@@")
    return this._http.delete(`/api/pet/${id}`);
  }

  addLikeToDb(id) {
    console.log("add like db@@@@@@ ID: ", id);
    return this._http.patch(`api/pet/like/${id}`, id);
  }
}
