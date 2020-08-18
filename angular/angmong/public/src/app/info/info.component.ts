import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  petId:any;
  onePet:any;
  like:boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {
      this._route.params.subscribe((params: Params)=>{console.log(params["id"]);
      this.petId = params["id"]
      });
      this.getOnePet(this.petId);
      this.like = false;
    }

  ngOnInit() {

  }
  getOnePet(id){

    this._httpService.getOnePetFromDb(id).subscribe(data=>{
      console.log("one pet from db: ", data);
      this.onePet = data;
    });
  }
  adoptPet(){
    this._httpService.deletePetFromDb(this.petId).subscribe(data=>{
      console.log("deleted pet data: ", data);
      this._router.navigate(['/pets']);
    });
  }
  likePet(){
    this._httpService.addLikeToDb(this.petId).subscribe(data=>{
      console.log("liked pet data: ", data);
      this.like = true;
      this.getOnePet(this.petId);
    });
  }

}
