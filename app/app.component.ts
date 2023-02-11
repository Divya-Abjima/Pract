import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AbstractControlOptions } from '@angular/forms';
import { forbiddenNameValidation } from './shared/namevalidator';
import { passwordValidation } from './shared/passwordValidation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  // registerForm!: FormGroup;

  get email() {
    return this.registerForm.get('email');
  }

  get alternateEmails() {
    debugger
    return this.registerForm.get('alternateEmails') as unknown as FormArray;
  }
   addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  // registerForm = new FormGroup({
  //   username : new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPwd : new FormControl(''),
  //   address : new FormGroup({
  //     plotNo : new FormControl(''),
  //     street : new FormControl(''),
  //     city : new FormControl(''),
  //     state : new FormControl('')
  //   })
  // });

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidation(/admin/)]], //required field validation
    email: [''],
    subscribe: [false],
    password: [''],
    confirmPwd: [''],
    address: this.fb.group({
      plotNo: [''],
      street: [''],
      city: [''],
      state: ['']
    }),
    alternativeEmails: this.fb.array([])
  },
    { validators: passwordValidation } as AbstractControlOptions);

  // this.registerForm.get('subscribe')?.valueChanges
  //   .subscribe(checkedValue => {
  //     const email = this.registerForm.get('email');
  //     if (checkedValue) {
  //       email?.setValidators(Validators.required);
  //     }
  //     else {
  //       email?.clearValidators();
  //     }
  //     email?.updateValueAndValidity();
  //   })

  // }
  demoData() {
    //   // this.registerForm.patchValue({
    //   //   username : 'test',
    //   //   password : '12345',
    //   //   confirmPwd : '12345',
    //   //   address: {
    //   //     plotNo : 'test',
    //   //     state : 'test'
    //   //   }
    //   // });
  }
}
