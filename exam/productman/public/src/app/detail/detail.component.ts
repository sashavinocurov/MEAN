import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  oneProduct: any;
  productId: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.productId = params [`id`];
      console.log("get product id", this.productId);
    });
    this.oneProduct = {name: '', qty: '', price: ''};

    this.showOneProduct();
  }

  showOneProduct() {
    console.log("Product id =", this.productId);
    const obs = this.httpService.getOneProductFromDb(this.productId);
    obs.subscribe(data => {
      console.log(data);
      this.oneProduct = data;
    });
  }
  delete() {
    const obs = this.httpService.deleteFromDb(this.productId);
    obs.subscribe(data => {
      console.log('delete product', data);
    });
    this.goHome();
  }
  goHome() {
    this._router.navigate(['']);
  }

}
