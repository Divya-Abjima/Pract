//class binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `<h4 [ngClass] = "allClasses">Heading
  </h4>
  <div [class] = "bgstyle">
  <p class = "label">
  Lorem ipsum dolor, <span [class.border] = "hasBorder">sit amet consectetur adipisicing</span> elit. Accusamus exercitationem eaque ducimus vero perferendis
  molestias dicta ex culpa officiis in magnam velit, excepturi, soluta reprehenderit labore perspiciatis, ratione
  tempore ab?
</p>
</div>
`,
  styles: [`
  .label {
    color:gray;
    padding:10px;
    box-shadow:2px 2px 4px orange;
  }
  .back {
    background-color: #ffffa0;
  }
  .border {
    border-bottom:2px solid red;
  }
  .heading {
    background-color:#baeab7;
  }
  `]
})
export class ClassComponent {
  public bgstyle = "back";
  public hasBorder = true;
  public allClasses = {
    "label" : this.hasBorder,
    "border": this.hasBorder,
    "heading":this.hasBorder
  }
}
