import { Component } from '@angular/core';
import { User } from './user';
import { SendDataService } from './send-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  userModel = new User('', 'xyz@gmail.com', 0 , 'Morning', 'default',true);
  hasError=true;
  public submit=false;

  constructor(private _sendService : SendDataService) { }

  validateTopic(value:any) {
    if(value == 'default') {
      this.hasError = true;
    }
    else {
      this.hasError = false;
    }
  }

  onSubmit() {
    this._sendService.enroll(this.userModel)
                    .subscribe(
                      data => console.log('Success', data),
                      error => console.error('Error', error)
                    );
  }
}
