import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allCakes: any;
  newCake: any;
  selectedCake: any;
  rateCake = {comment:" ", rating:" "};

  constructor(private _httpService: HttpService) {
    this.getAllCakes();
  };

  ngOnInit() {
    this.newCake = {name: " ", image: " "};
    this.selectedCake = 0;

  };
  getAllCakes(){
    let obs = this._httpService.getCakes();
    obs.subscribe(data => {
      console.log("All Cake: ", data);
      this.allCakes = data;
    });
  }
  addNewCake(){
    let obs = this._httpService.addCake(this.newCake);
    obs.subscribe(data => {
      console.log("New Cake: ", data);
      this.newCake = {name: "", image: ""};
    });
  }
  rateOneCake(id: string) {
    let obs = this._httpService.rateCake(id, this.rateCake);
    obs.subscribe(data => {
      console.log("Rate Cake: ", data);
      this.rateCake = { comment:" ", rating:" "};
    });
  }
  showCake(id: string) {
    let obs = this._httpService.getOneCake(id);
    obs.subscribe(data => {
      console.log("Show Cake: ", data);
      this.selectedCake = data[0];
      let sum = 0;
      for (let cake of data[0].comments){
        sum += cake.rating;
      }
      console.log(sum);
      this.selectedCake.avgRating = sum / data[0].comments.length;
    });
  }
}
