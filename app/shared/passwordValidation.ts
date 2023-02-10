import { AbstractControl } from '@angular/forms';

export function passwordValidation(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPwd');
    return password && confirmPassword && password.value !== confirmPassword.value ? 
    { 'misMatch': true } : null;
}