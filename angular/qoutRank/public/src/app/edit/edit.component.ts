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
  restId:any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.updatedRest = {name: '', cuisine: ''};
      this.restId = params[`id`];
      console.log("get rest id", this.restId);
      this.getOneRestaurant();
    });
  }
  updateRestaurantToDb() {
    const observable = this.httpService.sendUpdatedToDb(this.restId, this.updatedRest);
    observable.subscribe(data =>{
      console.log('got', data);
      this.updatedRest = {name: '', cuisine: ''};
    });
    this.goHome();
  }
  getOneRestaurant() {
    console.log("rest id =", this.restId);
    const observable = this.httpService.getOneRestaurantFromDb(this.restId);
    observable.subscribe(data => {
        console.log(data);
        this.updatedRest = data;
    });
  }
  goHome() {
    this._router.navigate(['']);
  }
}
