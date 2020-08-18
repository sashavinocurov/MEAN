import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet:any;
  pet:any;
  errors:any;
  message:boolean;
  allPets:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {
      this.newPet = {
        petName: null,
        petType: null,
        description: null,
        skill1: null,
        skill2: null,
        skill3: null,
      }
      this.errors = false;
      this.getAllPets()
    }

  ngOnInit() {
    this.errors;
  }
  addNewPet(){
    this._httpService.addPetToDb(this.newPet).subscribe(data=>{
      console.log("here data back from new :", data);
      if(data['errmsg']){
        this.errors = data['errmsg'];}
      else{
        this.newPet = {};
        this.navigateTo();
        }
      });

    }
  navigateTo(){
    this._router.navigate(['/pets']);
  }
  getAllPets(){
    this._httpService.getPetsFromDb().subscribe(data=>{
      console.log("allpets: ", data);
      this.allPets = data;
      })
    };
 }
