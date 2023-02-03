//property binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
               <h4>Enter first name</h4>
               <input [id] = "myid" type="text" value="">
               <h4>Enter your age</h4>
               <input type="number" disabled><br>
               <input type="radio" [disabled]> Agree?<br>
               <input type="checkbox" bind-checked = "check" bind-disabled = "!isAllowed">
`,
  styleUrls: []
})
export class PropertyComponent {
  public myid = "name";
  public check = true;
  public isAllowed = false;
}
