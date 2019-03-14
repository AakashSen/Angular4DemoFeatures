import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

   form = new FormGroup({
     oldPassword : new FormControl('', [
       Validators.required, 
       Validators.minLength(3), 
       PasswordValidators.isInCorrectOldPassword 
      ]),
     newPassword : new FormControl('', [Validators.required, Validators.minLength(3)]),
     confirmPassword : new FormControl('', [Validators.required, Validators.minLength(3)])
   }, PasswordValidators.passwordShoulMatch);

   get oldPassword() {
      return this.form.get('oldPassword');
   }
   
   get newPassword() {
    return this.form.get('newPassword');
   }

   get confirmPassword() {
     return this.form.get('confirmPassword');
   }

}
