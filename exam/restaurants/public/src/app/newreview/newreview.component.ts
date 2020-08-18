import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  newReview: any;
  restId: any;
  oneRest: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.newReview = { reviewer: '', review: '', stars: ''};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.newReview = {name: '', cuisine: ''};
      this.restId = params[`id`];
      console.log("Show id", this.restId);
    });
  }
  getOneRestaurant() {
    console.log("Rest id:", this.restId);
    const observable = this.httpService.getOneRestaurantDb(this.restId);
    observable.subscribe(data => {
      console.log(data);
      this.oneRest = data;
  });
  }
  addReview() {
    const observable = this.httpService.addReviewDb(this.restId, this.newReview);
    observable.subscribe(data => {
      if(!data['error']) {
        console.log(data);
        this.newReview = data;
        console.log(`${this.newReview}`);
      }
    });
    this.goHome();
  }
  goHome() {
    this._router.navigate([`/restaurants/${this.restId}`]);
  }

}
