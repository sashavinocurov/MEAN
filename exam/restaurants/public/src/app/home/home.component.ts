import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: any;
  restId: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    const observable = this.httpService.getAllRestaurantsDb();
    console.log("All Rest Db @@@@@@@@@@");
    observable.subscribe(data =>{
      console.log('got all restaurants: ', data);
      this.restaurants = data;
    });
  }

  delete(restId) {
    const observable = this.httpService.deleteRestaurantDb(restId);
    console.log('Delete Rest from Db @@@@@@@');
    observable.subscribe(data => {
      console.log('Rest deleted: ', data);
    });
    this.getAllRestaurants();
  }
}
