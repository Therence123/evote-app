import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 user = new User();
 msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }

  loginUser(){
      this._service.loginUserFromRemote(this.user).subscribe(
        data => {
          console.log("response received");
        // this._router.navigate(['evote/admin/main/elections'])
        this._router.navigate(['dashboard'])
        
        },
        error => {console.log("exception occured");
          this.msg="Bad credentials, please enter valid email and password";
      }
      )
  }

}
