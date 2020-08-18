import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedRest: any;
  restId: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.updatedRest = { restName: '', cuisine: ''};
      this.restId = params[`id`];
      console.log("Rest ID @@@@@", this.restId);
      this.getOneRestaurant();
    });
  }
  updateRestaurant() {
    const observable = this.httpService.updateRestaurantDb(this.restId, this.updatedRest);
    observable.subscribe(data => {
      console.log("Updated @@@@:", data);
      this.updatedRest = { restName: '', cuisine: ''};
    });
    this.goHome();
  }
  getOneRestaurant() {
    console.log("Rest id:", this.restId);
    const observable = this.httpService.getOneRestaurantDb(this.restId);
    observable.subscribe(data => {
      console.log(data);
      this.updatedRest = data;
    });
  }
  goHome() {
    this._router.navigate(['']);
  }
}
