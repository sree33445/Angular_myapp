import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
 user: any
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe((data) => this.user = data);
  }
}
