import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
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
    this.newReview = {reviewerName: '', comment: '', stars: ''};
   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.newReview = {name: '', cuisine: ''};
      this.restId = params[`id`];
      console.log("get rest id", this.restId);
    });
  }
  getOneRestaurant() {
    console.log("rest id =", this.restId);
    const observable = this.httpService.getOneRestaurantFromDb(this.restId);
    observable.subscribe(data => {
        console.log(data);
        this.oneRest = data;
    });
  }
  addReview() {
    const observable = this.httpService.sendReviewToDb(this.restId, this.newReview);
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
    this._router.navigate([`/detail/${this.restId}`]);
  }

}
