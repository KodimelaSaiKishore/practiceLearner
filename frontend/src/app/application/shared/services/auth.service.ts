import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-details';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api + "/user";

  constructor( private _http:HttpClient) { }

  Register(data:any){
    return this._http.post<User>(this.api, data)
  }

  login(email: string, password: string){

  }

  logout(){

  }

}
