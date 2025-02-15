import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // rememberMe:boolean=false;
  constructor(private http:HttpClient) { }


  loginData(data:any){
    return this.http.post(environment.API+'/empLogin',data);
  }

  forgotPassword(data:any)
  {
    return this.http.post(environment.API+'/forgotPassword',data);
  }

  resetpassword(data:any)
  {
    return this.http.post(environment.API+'/resetPassword',data);
  }


}
