import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: any;
  restaurantsId: any;

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
    console.log('reached get all restaurants from db in home component');
    observable.subscribe(data =>{
      console.log('got all restaurants: ', data);
      this.restaurants= data;
    });
  }

  delete(restaurantsId) {
    const observable = this.httpService.deleteFromDb(restaurantsId);
    console.log('reached get all restaurants from db in home component');
    observable.subscribe(data =>{
      console.log('got all restaurants: ', data);
    });
    this.getAllRestaurants();
  }

}
