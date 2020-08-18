import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  newRest: any;
  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newRest = { name: '', cuisine: ''};
  }

  addRest() {
    const observable = this.httpService.sendRestaurantToDb(this.newRest);
    observable.subscribe(data => {
      if(!data['errors']){
        console.log(data);
        this.newRest = data;
      }
    });
    this.goHome();
  }
  goHome() {
    this._router.navigate(['']);
  }

}
