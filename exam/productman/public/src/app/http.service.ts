import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProductsFromDb() {
    console.log("All Products from Db @@@@@@@");
    return this._http.get(`/api/products`);
  }
  sendProductToDb(product) {
    console.log("New Product to Db @@@@@@@@");
    return this._http.post(`/api/products`, product);
  }
  getOneProductFromDb(id) {
    console.log("Sho one Product from Db @@@@@@@");
    return this._http.get(`/api/products/${id}`, id);
  }
  sendUpdatedToDb(id, product) {
    console.log("Update product in DB @@@@@@@@@");
    return this._http.put(`/api/products/${id}`, product);
  }
  deleteFromDb(id) {
    console.log("Delete product from DB @@@@@@@@@");
    return this._http.delete(`/api/products/${id}`, id);
  }
}
