import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedProduct: any;
  productId: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.updatedProduct = {name: '', qty: '', price: ''};
      this.productId = params[`id`];
      console.log("get Product id ", this.productId);
      this.getOneProduct();
    });
  }
  updateProduct() {
    const obs = this.httpService.sendUpdatedToDb(this.productId, this.updatedProduct);
    obs.subscribe(data => {
      console.log('got', data);
      this.updatedProduct = {name: '', qty: '', price: ''};
    });
    this.goHome();
  }
  getOneProduct() {
    console.log("Product id =", this.productId);
    const obs = this.httpService.getOneProductFromDb(this.productId);
    obs.subscribe(data => {
      console.log(data);
      this.updatedProduct = data;
    });
  }
  goHome() {
    this._router.navigate(['']);
  }

}
