import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControlOptions } from '@angular/forms';
import { validateLength } from './validation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newForm';
  skills = new FormArray([]) as any;
  info = new FormArray([]) as any;
  address = new FormArray([]) as any;
  invalidateLength = false;
  public showRemove = false;
  public unclicked=true;

  addSkill() {
    this.skills.push(new FormControl(''));
    this.showRemove=true;
  }
  removeSkill(i : number) {
    this.skills.removeAt(i);
  }
  removeAll() {
    this.showRemove=false;
    this.skills.clear();
  }
  addInfo() {
    const group = new FormGroup({
      name : new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
    this.info.push(group);
    this.unclicked=false;
  }
}
