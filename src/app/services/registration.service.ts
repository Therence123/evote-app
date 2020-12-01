import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

    public loginUserFromRemote(user: User):Observable<any>{

      //  return this._http.post<any>("http://localhost:8080/login",user)
      return this._http.post<any>("http://teetech-env.eba-xeeydpz3.eu-west-3.elasticbeanstalk.com/",user)


    }

  
}
