import { Component } from '@angular/core';

@Component({
  selector: 'app-refvar',
  templateUrl: './refvar.component.html',
  styleUrls: ['./refvar.component.css']
})
export class RefvarComponent {
  public name:string = "";
  public age ="";
  displayName(value1:string, value2:string) : string {
    this.name= value1 + " " + value2;
    return this.name;
  }
  validAge(value:any) {
    if(value<1 || value >120) {
      this.age = "Enter a valid age!"
    }
    else {
    if(value>=18) {
      this.age = "Eligible";
    }
    else {
      this.age = "Not eligible";
    }
  }
  }
}
