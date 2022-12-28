import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../MyClass/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.baseUrl;
  
  private publicHttpHeaders= {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  constructor(private _http: HttpClient) { }

  loginUser(data: Login) {
    return this._http.post(this.baseUrl + "/login", data);
  }
}
