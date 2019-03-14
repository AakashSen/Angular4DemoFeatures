import { Component,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.cannotContainSpace,
    ],
    UserNameValidators.shouldBeUnique
  ),
    
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  get username() {
    return this.form.get('username');
  }
  
  get password() {
    return this.form.get('password');
  }

  login() {
    if (!(this.username.value === 'Aakash123') && !(this.password.value === 'Sen12345')){
      this.form.setErrors({
        isFormInvalid : true
      })
    }
   
  }
}
