import { AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(control: AbstractControl): any {
//   const forbidden = /admin/.test(control.value);
   const forbidden = ['admin','user']
  if (forbidden.includes(control.value)) {
    return { forbidden: { value: control.value } };
  } else {
    return null;
  }
}
