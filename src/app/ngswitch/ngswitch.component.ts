import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
  public color="";
showColor(value:number) {
  switch(value) {
    case 1: this.color = "you selected red";
    break;
    case 2: this.color = "you selected green";
    break;
    case 3: this.color = "you selected blue";
    break;
  }
  return console.log(this.color);
}
}
