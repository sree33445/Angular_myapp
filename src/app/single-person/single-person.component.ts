import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrl: './single-person.component.css',
})
export class SinglePersonComponent implements OnInit {
  users: any = [];
  constructor(private userservice: UserService) {}
  ngOnInit(): void {
    this.userservice.getUsers().subscribe((res) => (
      this.users = res
    ));
    // this.users = this.userservice.getUser();
  }
}
