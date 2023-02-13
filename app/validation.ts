import { FormArray } from '@angular/forms';

export function validateLength(len: FormArray) {
    return len.length > 2 ? {
      invalidLength : true
    } : null
  }