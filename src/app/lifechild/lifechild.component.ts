import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifechild',
  templateUrl: './lifechild.component.html',
  styleUrl: './lifechild.component.css',
})
export class LifechildComponent implements OnInit, OnDestroy, OnChanges,DoCheck {
  constructor() {
    console.log('Child constructor called');
  }
  @Input() fromParent = '';
  @Input() childProduct:any
  counter = 0;
  interval: any;

  ngOnInit(): void {
    console.log('Child init called');

    // this.interval = setInterval(() => {
    //   this.counter++;
    //   console.log(this.counter);
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Child component unloaded');
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // let child = changes['fromParent']
    // console.log('current value', child.currentValue);
    // console.log('previous value', child.previousValue);
    // console.log('On changes called in child');
    console.log('on changes', changes);
    
  }
  ngDoCheck(): void {
    console.log('do check called', this.childProduct);
    
  }
}
