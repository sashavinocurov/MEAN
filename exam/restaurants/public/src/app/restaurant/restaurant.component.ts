import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  oneRest: any;
  restId: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.restId = params [`id`];
      console.log("Rest id :", this.restId);
    });
    this.oneRest = { restName: '', cuisine: ''};

    this.showOneRestaurant();
  }
  showOneRestaurant () {
    console.log("Rest Id: ", this.restId);
    const observable = this.httpService.getOneRestaurantDb(this.restId);
    observable.subscribe(data => {
      console.log('@@@@@', data);
      this.oneRest = data;
    });
  }
  goHome() {
    this._router.navigate(['']);
  }


}
