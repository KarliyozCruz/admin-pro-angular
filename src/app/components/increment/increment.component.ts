import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output() outputValue: EventEmitter<number> = new EventEmitter();
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue (value: number): any {
    if(this.progress >= 100 && value > 0){
      this.outputValue.emit(100);
      return this.progress = 100;
    }

    if(this.progress <= 0 && value < 0){
      this.outputValue.emit(0);
      return this.progress = 0;
    }

    this.progress += value; 
    this.outputValue.emit(this.progress);
  }

  onChange( value: number ): void {
    if(value >= 100){
      this.progress = 100;
      this.outputValue.emit(this.progress);
    }else if(value <=0) {
      this.progress = 0;
      this.outputValue.emit(this.progress);
    }else {
      this.progress = value;
      this.outputValue.emit(this.progress);
    }
  }

}
