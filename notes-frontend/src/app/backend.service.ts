import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_url = "https://scythe-striped-purchase.glitch.me/"

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {   }

  getUsers = () => {
    return this.http.get(api_url + 'users');
  }

  addUser = (name: string) => {
    let data = {'name': name};
    return this.http.post(api_url + 'users', data)
  }

  deleteUser = (name: string) => {
    let data = {'name': name};
    return this.http.get(api_url + 'remove?name=' + name);
  }

  getNotes = (name: string) => {
    return this.http.get(api_url + 'notes?name=' + name);
  } 
}
