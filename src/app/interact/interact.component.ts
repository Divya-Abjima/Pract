import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interact',
  templateUrl: './interact.component.html',
  styleUrls: ['./interact.component.css']
})
export class InteractComponent {
  @Input() public parentInfo:any;
  @Output() public checkEvent = new EventEmitter();
  public greet = "";
  pass = 'iAmhere2016';
  show = false;
  displayMessage(value:string) {
    this.greet = this.parentInfo + " " + value;
    this.show=true;
  }
  checkpass(value:string) {
    if(value===this.pass) {
      this.checkEvent.emit("Logged in");
    }
    else {
      this.checkEvent.emit("Your password is incorrect");
    }
  }
}
