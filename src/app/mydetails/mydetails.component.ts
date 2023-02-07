import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent {
 public info: any = [];

 constructor(private _myservice : MyserviceService) { }

 ngOnInit() {
  this.info = this._myservice.getDetails();
 }
}
