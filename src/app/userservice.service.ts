import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  public adduser(u:User)
  {
    return this.http.post("http://localhost:8019/register",u,{responseType:'text' as 'json'});
  }

  public login(u:User)
  {
    return this.http.post("http://localhost:8019/login",u,{responseType:'text' as 'json'});
  }

  public getUser(email:any)
  {
    return this.http.post("http://localhost:8019/user",email,{responseType:'text' as 'json'});
  }
  public changepassword(user:User)
  {
    return this.http.post("http://localhost:8019/password",user,{responseType:'text' as 'json'});
  }

}
