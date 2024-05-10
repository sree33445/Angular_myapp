import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-anim',
  standalone: true,
  imports: [],
  templateUrl: './anim.component.html',
  styleUrl: './anim.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', animate('1s')),
      transition('closed => open', animate('0.5s')),
    ]),
  ],
})
export class AnimComponent {
  isOpen: boolean = false;

  toggle(){
    console.log(this.isOpen)
    this.isOpen = !this.isOpen
  }
}
