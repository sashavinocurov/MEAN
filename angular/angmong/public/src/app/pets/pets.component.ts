import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  allPets:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {
      this.getAllPets();
  }

  ngOnInit() {
  }
  getAllPets(){
    this._httpService.getPetsFromDb().subscribe(data=>{
      console.log("allpets: ", data);
      this.allPets = data;
    });
  }

}
