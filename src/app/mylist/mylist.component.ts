import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent {
public info:any = [];

constructor(private _myservice: MyserviceService) { }

ngOnInit() {
  this.info = this._myservice.getDetails();
}
}
