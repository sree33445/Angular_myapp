import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  constructor(private userService: UserService) {}
  countries: string[] = ['India', 'UK', 'USA'];

  user = {
    id: '',
    firstname: '',
    email: '',
    phone: '',
    country: '',
  };

  onSubmit() {
    this.userService
      .postdata(this.user)
      .subscribe((res) => console.log('posted'));
  }
}
