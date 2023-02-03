//style binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  template: `<div [ngStyle] = "multipleStyles">
  Lorem ipsum dolor, <span [style.backgroundColor] = "isStyled ? '#e99e27': '#81f481'">sit amet consectetur adipisicing elit</span>. Accusamus exercitationem eaque ducimus vero perferendis
  molestias <span [style.backgroundColor] = "!isStyled ? '#e99e27' : '#81f481'">dicta ex culpa officiis</span> in magnam velit, excepturi, soluta reprehenderit labore perspiciatis, ratione
  tempore ab?
  </div>`,
  styles: []
})
export class StyleComponent {
public isStyled =true;
public multipleStyles = {
  color: 'white',
  backgroundColor:'black',
  border: '2px solid yellow',
  padding:'10px'
}
}
