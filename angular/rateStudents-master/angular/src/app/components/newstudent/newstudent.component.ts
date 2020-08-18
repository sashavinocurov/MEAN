import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {
  student: any;
  constructor(private http: HttpService, private route: Router) { }

  ngOnInit() {
    this.student = {
      name: "",
      age: "",
      rating: 4,
      beltsReceived: []
    }
  }

  onFormSubmit(event){
    let obs = this.http.createStudent(event);
    obs.subscribe(data => {
      this.route.navigate(['/home'])
    }, err => {
      return;
    })
    
  }

}
