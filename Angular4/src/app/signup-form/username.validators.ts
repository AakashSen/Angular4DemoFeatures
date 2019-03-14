import { AbstractControl, ValidationErrors } from "@angular/forms";
import { promise } from "protractor";

export class UserNameValidators {

   static cannotContainSpace(control : AbstractControl): ValidationErrors | null {

        if((control.value as string).indexOf(' ') >= 0)
          return {cannotContainSpace : true}
        return null;
    }

    static shouldBeUnique(control : AbstractControl): Promise<ValidationErrors | null> {
      
        return new Promise( (resolve,reject) => {
            setTimeout(() => {
              if ( control.value === 'Aakash' )
               resolve({shouldBeUnique : true})
              else 
               resolve(null);
          }, 2000);
            
         });
    }
}