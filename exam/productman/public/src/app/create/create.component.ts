import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: any;
  product: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newProduct = {name: '', qty: '', price: '' };
  }

  addProduct() {
    const obs = this.httpService.sendProductToDb(this.newProduct);
    obs.subscribe(data => {
      if(!data ['errors']) {
        console.log(data);
        this.newProduct = data;
      }
    });
    this.goHome();
  }
  goHome() {
    this._router.navigate(['']);
  }

}
