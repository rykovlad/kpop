import { Component } from '@angular/core';
import { NumbArr } from 'src/models/NumbsArr';

@Component({
  selector: 'app-add-numb',
  templateUrl: './add-numb.component.html',
  styleUrls: ['./add-numb.component.css']
})
export class AddNumbComponent {

  numbers: NumbArr[] = [];

  constructor() {
  }

  addNumber() {
    this.numbers.push({ value: 0 });
  }

  deleteNumber(index: number) {
    if (index >= 0 && index < this.numbers.length) {
      this.numbers.splice(index, 1);
    }
  }

}
