import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petId:any;
  editPet:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {
    this._route.params.subscribe((params: Params)=>{console.log(params["id"]);
      this.petId = params["id"]
      });
      this.getOnePet(this.petId);

  }
  ngOnInit() {
  }
  getOnePet(id){
    this._httpService.getOnePetFromDb(id).subscribe(data=>{
      console.log("one pet from db: ", data);
      this.editPet = data;
    });
  }
  navigateTo(){
    this._router.navigate(['/pets']);
  }
  editOnePet(){
    this._httpService.editPetInDb(this.petId, this.editPet).subscribe(data=>{
      console.log("edit pet: ", data);
      this.editPet = {};
      this._router.navigate([`/info/${this.petId}`]);
    });
  }

}
