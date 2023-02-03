//event binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
  <p [style.color] = "changeColor ? 'green' : 'red'"> This is a sample text.</p>
  <button (click) = "onclick()">Greet</button>
  <br>{{greeting}}
  `,
  styles: []
})
export class EventComponent {
  public name = 'Divya';
  public greeting='';
  public changeColor=false;
  onclick() {
    console.log('Clicked');
    this.greeting = "Welcome " + this.name + "!";
    this.changeColor = true;
  }
}
