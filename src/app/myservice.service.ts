import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  getDetails() {
    return [
      {'id': 1, 'name' : 'Ajay', 'age' : 24},
      {'id': 2, 'name' : 'Binoy', 'age' : 27},
      {'id': 3, 'name' : 'Chelsea', 'age' : 23}
    ];
  }
}
