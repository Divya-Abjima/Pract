import { AbstractControl, ValidatorFn } from '@angular/forms'

// export function forbiddenNameValidation (control : AbstractControl): {[key : string] : any } | null {
//     const forbid = /admin/.test(control.value);
//     return forbid ? {'forbiddenName' : {value: control.value}} : null;
// }

export function forbiddenNameValidation(forbiddenName : RegExp) : ValidatorFn {
    return (control : AbstractControl): {[key : string] : any } | null => {
            const forbid = forbiddenName.test(control.value);
            return forbid ? {'forbiddenName' : {value: control.value}} : null;
    }
}