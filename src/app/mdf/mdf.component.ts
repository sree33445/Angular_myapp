import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from '../validators/username.validator';
import { passwordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css',
})
export class MdfComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userForm: FormGroup = new FormGroup({});
  ageCheck: boolean = false;

  // userForm = new FormGroup({
  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     forbiddenNameValidator,
  //   ]),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   email: new FormControl('', Validators.email),
  //   // address: new FormGroup({
  //   //   city: new FormControl(''),
  //   //   state: new FormControl(''),
  //   //   country: new FormControl(''),
  //   // }),
  // });

  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator,
          ],
        ],
        password: [''],
        confirmPassword: [''],
        email: ['', Validators.email],
        age: [''],
        parentName: [''],
        hobbies: this.fb.array([]),
      },
      { validator: passwordValidator }
    );
    this.userForm.get('age')?.valueChanges.subscribe((data) => {
      if (data < 18 && data) {
        this.ageCheck = true;
      } else {
        this.ageCheck = false;
      }
    });
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobbies() {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobby(data: any) {
    this.hobbies.removeAt(data);
  }

  loadData() {
    this.userForm.patchValue({
      username: 'Ramesh',
      password: '123',
      confirmPassword: '123',
    });
  }
}
