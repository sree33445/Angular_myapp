import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrl: './rxjs1.component.css',
})
export class Rxjs1Component implements OnInit, OnDestroy {
  mysubscription = new Subscription();
  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      console.log('Promise call...');
      setTimeout(() => {
        resolve('Promise working1');
        resolve('Promise working2');
        resolve('Promise working3');
        resolve('Promise working4');
      }, 1000);
    });

    promise.then((result) => console.log(result));

    // const observable = new Observable((observer) => {
    //   console.log('Observable call...');
    //   setTimeout(() => {
    //     observer.next('Observable is working1');
    //     observer.next('Observable is working2');
    //     observer.next('Observable is working3');
    //     observer.next('Observable is working4');
    //   }, 1000);
    // });

    // observable
    //   .pipe(filter((d) => d === 'Observable is working3'))
    //   .subscribe((result) => console.log(result));

    const observable = new Observable((sub) => {
      let counter = 0;
      setInterval(() => {
        counter = counter + 1;
        sub.next(counter);
      }, 1000);
    });

    this.mysubscription = observable.subscribe((result) =>
      console.log('subscriber count' + result)
    );
  }

  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }
}
