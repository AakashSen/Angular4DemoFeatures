import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  
    static isInCorrectOldPassword(control : AbstractControl) : ValidationErrors | null {

      if (!(control.value === '1234'))
        return {isInCorrectOldPassword : true}
      return null;
    }

    static passwordShoulMatch(control : AbstractControl) : ValidationErrors | null {

        let newPassword = control.get ('newPassword');
        let confirmPassword = control.get ('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordShoulMatch : true };
        }

        return null;
    }
}