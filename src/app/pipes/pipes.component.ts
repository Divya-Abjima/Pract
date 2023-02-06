import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public sendValue='';
  public numstring ='';
addpipes(value:any) {
this.sendValue = value;
}
addnopipes(value:any) {
  this.numstring = value;
}
}
