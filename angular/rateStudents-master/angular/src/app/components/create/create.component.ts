import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  ageError: boolean = false;
  submitted: boolean = false;
  @Input() student: any;
  @Output() onSubmit = new EventEmitter(); 
  
  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    this.submitted = true;
    if(this.student.age < 18){
      this.ageError = true;
      return;
    }
    this.onSubmit.emit(this.student);
  }

}
