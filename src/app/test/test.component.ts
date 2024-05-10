import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  show: boolean = true;
  personName = ' ';
  color = 'blue';
  num ='';

  fruits = ['Apple', 'Orange', 'Grapes'];

  persons = [
    { name: 'Ajith', age: 25, gender: 'male' },
    { name: 'Eva', age: 20, gender: 'female' },
    { name: 'Sreeraj', age: 23, gender: 'male' },
    { name: 'Ansiya', age: 20, gender: 'female' },
  ];

  logMessage(data: any) {
    console.log(data);
  }
}
