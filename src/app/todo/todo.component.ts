import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  subjectArray: any = [];

  addSubject(item: any) {
    this.subjectArray.push({ id: this.subjectArray.length + 1, name: item });
  }

  removeItem(item: any) {
    this.subjectArray = this.subjectArray.filter(
      (subject: any) => subject.id !== item
    );
  }
}
