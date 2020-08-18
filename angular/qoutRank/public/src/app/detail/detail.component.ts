import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  oneRest: any;
  restId: any;
  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.restId = params[`id`];
      console.log("get rest id", this.restId);
    });
    this.oneRest = {name: '', cuisine: ''};

    this.showOneRestaurant();
  }

  showOneRestaurant() {
    console.log("rest id =", this.restId);
    const observable = this.httpService.getOneRestaurantFromDb(this.restId);
    observable.subscribe(data => {
        console.log(data);
        this.oneRest = data;

      });
  }
  goHome() {
    this._router.navigate(['']);
  }

}
