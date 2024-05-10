import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() parentData = '';
  @Output() childToParent = new EventEmitter();
  childTextValue: string = '';

  sendData() {
    this.childToParent.emit(this.childTextValue);
  }
}
