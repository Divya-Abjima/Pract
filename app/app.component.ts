import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
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
    password: [''],
    confirmPwd: [''],
    address: this.fb.group({
      plotNo: [''],
      street: [''],
      city: [''],
      state: ['']
    })
  }, 
  {validators: passwordValidation } as AbstractControlOptions );

  demoData() {
    // this.registerForm.patchValue({
    //   username : 'test',
    //   password : '12345',
    //   confirmPwd : '12345',
    //   address: {
    //     plotNo : 'test',
    //     state : 'test'
    //   }
    // });
  }
}
