import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  getAllRestaurantsDb() {
    return this._http.get(`/api/restaurants`);
  }
  sendRestaurantToDb(restaurant) {
    return this._http.post(`/api/restaurants`, restaurant);
  }
  getOneRestaurantFromDb(id) {
    return this._http.get(`/api/restaurants/${id}`);
  }
  sendUpdatedToDb(id, restaurant) {
    return this._http.put(`/api/restaurants/${id}`, restaurant);
  }
  deleteFromDb(id) {
    return this._http.delete(`/api/restaurants/${id}`);
  }
  sendReviewToDb(id, review) {
    console.log("review serv ####$$$")
    return this._http.put(`/api/newreview/${id}`, review);
  }
}
