import { Component, Input, OnInit } from '@angular/core';
import { NumbArr } from 'src/models/NumbsArr';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @Input() numberArray: NumbArr[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get maxNumber(): number {
    if (this.numberArray.length < 1) return 0;
    let max = this.numberArray[0].value;
    for (let i = 1; i < this.numberArray.length; ++i) {
      if (this.numberArray[i].value > max) {
        max = this.numberArray[i].value;
      }
    }
    return max;
  }

  get minNumber(): number {
    if (this.numberArray.length < 1) return 0;
    let min = this.numberArray[0].value;
    for (let i = 1; i < this.numberArray.length; ++i) {
      if (this.numberArray[i].value < min) {
        min = this.numberArray[i].value;
      }
    }
    return min;
  }

  get calc(): number {
    return Math.abs(this.minNumber - this.maxNumber);
  }


}
