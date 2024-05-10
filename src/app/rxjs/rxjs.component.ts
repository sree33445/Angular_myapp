import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent implements OnInit {
  num: any;
  studentList = ['Ansiya', 'Ajith', 'Hari'];

  students: Observable<string[]> = of(this.studentList);
  studentName: Observable<string> = of('Ajesh');

  studentObj = {
    name: 'Raju',
    age: 20,
  };
  studObj: Observable<any> = of(this.studentObj);

  itemsArray = ['Fashion', 'Electronics', 'Mobile', 'Household'];

  item$: Observable<string> = from(this.itemsArray);

  ngOnInit(): void {
    this.students.subscribe((res) => console.log(res));
    this.studentName.subscribe((res) => console.log(res));
    this.studObj.subscribe((res) => console.log(res));
    this.item$.subscribe((res) => console.log(res));
    // const observable = new Observable((observer) => {
    //   try {
    //     setInterval(() => {
    //       observer.next('Ansiya');
    //     }, 1000);
    //     // setInterval(() => {
    //       observer.next('Ajith');
    //     // }, 3000);
    //     // setInterval(() => {
    //       observer.next('Hari');
    //     // }, 5000);

    //     observer.complete();
    //     observer.next('Sreeraj');
    //   } catch (error) {
    //     observer.error(error);
    //   }
    // });

    // observable.subscribe((res) => {
    //   this.num = res;
    //   console.log(res);
    // });
  }
}
