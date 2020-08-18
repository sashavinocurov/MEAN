import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { };

  getCakes() {
    return this._http.get(`/cake`);
  }

  getOneCake(id) {
    return this._http.get(`/cake/${id}`);
  }

  addCake(newCake) {
    return this._http.post(`/cake`, newCake);
  }

  rateCake(id, rateCake) {
    return this._http.put(`/cake/${id}`, rateCake);
  }
}
