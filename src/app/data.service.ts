import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  firstClick() {
    return console.log('Clicked');
  }

  getUsers() {
    return this.Http.get('https://reqres.in/api/users')
  }
}
