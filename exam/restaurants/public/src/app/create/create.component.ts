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
    this.newRest = { restName: '', cuisine: ''};
  }

  addRest() {
    const observable = this.httpService.addNewRestaurantDb(this.newRest);
    console.log("Rest Created@@@@@");
    observable.subscribe(data => {
      if(!data['error']){
        console.log("New Rest: ", data);
        this.newRest = data;
      }
    });
    this.goHome();
  }
  goHome() {
    this._router.navigate(['/restaurants']);
  }
}
