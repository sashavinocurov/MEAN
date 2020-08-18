import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllRestaurantsDb() {
    console.log("All Restaurants Server $$$$$$$$");
    return this._http.get(`/api/restaurants`);
  }

  addNewRestaurantDb(restaurant) {
    console.log("New Rest Server $$$$$$$$$$$");
    return this._http.post(`/api/restaurants/new`, restaurant);
  }

  getOneRestaurantDb(id) {
    console.log("One Rest Server $$$$$$$$$$");
    return this._http.get(`/api/restaurants/${id}`);
  }

  updateRestaurantDb(id, restaurant) {
    console.log("Update Rest Server $$$$$$$$");
    return this._http.put(`/api/restaurants/edit/${id}`, restaurant);
  }

  addReviewDb(id, review) {
    console.log("ID: ", id)
    console.log("Add Review Server $$$$$$$$$$$$$");
    return this._http.put(`/api/review/${id}`, review);
  }

  deleteRestaurantDb(id) {
    console.log("Delete rest Server $$$$$$$$");
    return this._http.delete(`/api/restaurants/${id}`);
  }
}
