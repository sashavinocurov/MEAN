import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allStudents: any;
  studentToEdit: any;
  studentToUpdate: any;
  studentToRate: any;
  studentToDelete: any;
  
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.studentToRate = {
      _id: "",
    }
    this.studentToUpdate = {
      _id: "",
    }
    this.getAllStudents();
  }

  getAllStudents(){
    let obs = this.httpService.getStudents()
    obs.subscribe((data:any) => {
      this.allStudents = data.results;
    })
  }

  rateThisFool(student){
    this.studentToRate = student;
  }

  rateFool(event){
    let obs = this.httpService.rateStudentAbility(event._id, event);
    obs.subscribe(data => {
      this.studentToRate = {_id: ""};
    })
  }

  // editThisSucka(student){
  //   this.studentToEdit = student;
  // }

  // editSucka(event){
  //   let obs = this.httpService.editStudent(event);
  //   obs.subscribe(data => {
  //     this.getAllStudents();
  //   })
  // }

  giveThisHomieABelt(student){

  }

  deleteThisKid(student){
    let obs = this.httpService.deleteStudent(student._id)
    obs.subscribe((data: any) => {
      this.getAllStudents();
    })
  }
}
