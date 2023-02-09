import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  _url = 'http://127.0.0.1:5500/forms/src/assets/data.html';
  constructor(private _http: HttpClient) { }

  enroll(user : User) {
    return this._http.post<any>(this._url, user);
  }
}
