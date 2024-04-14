import { Component, ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { CommonserviceService } from '../../utilities/services/commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private commonServ:CommonserviceService,private router:Router){}

  login(): void {
    if (this.username && this.password){
      this.commonServ.authenticate(this.username,this.password).subscribe(result=>{
        if(result){
          this.router.navigate(['/app/playground']);
        }
        else {
          alert('Invalid Credentials');
        }
      });
    }
    else{
      alert('Please enter the credentials')
    }
    
  }

}
