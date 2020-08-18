import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() student: any;
  @Output() onSubmit = new EventEmitter(); 
  
  constructor() { }

  ngOnInit() {
  }

  updateSelected(){
    this.onSubmit.emit(this.student);
  }

}
