import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  student: any;
  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getThisStudent(params['id'])
    });

    this.student = {
      name: name,
      age: "",
      rating: "",
      beltsReceived: []
    }
  }

  getThisStudent(id){
    let obs = this.http.getOneStudent(id);
    console.log(obs);
    obs.subscribe((data: any) => {
      this.student = data.results
    })
  }

  onFormSubmit(event){
    let obs = this.http.editStudent(event);
    obs.subscribe(data => {
      this.router.navigate(['/home'])
    }, err => {
      return;
    })  
  }
}
