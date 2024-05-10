import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrl: './persons-details.component.css',
})
export class PersonsDetailsComponent implements OnInit {
  users: any = [];
  errorMessage: string = 'Loading....';
  p:number = 1
  constructor(private userservice: UserService) {}
  ngOnInit(): void {
    this.userservice.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => (this.errorMessage = err.message),
    });
    // this.users = this.userservice.getUser();
  }
}
