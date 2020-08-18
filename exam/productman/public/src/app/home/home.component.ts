import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  productsId: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    const obs = this.httpService.getAllProductsFromDb();
    console.log("Reached Get all products from DB in home component");
    obs.subscribe(data => {
      console.log("got all products: ", data);
      this.products = data;
    });
  }

}
