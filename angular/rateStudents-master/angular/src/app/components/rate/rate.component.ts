import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() student: any;
  @Output() onSubmit = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  rateSelected(){
    this.onSubmit.emit(this.student);
  }

}
