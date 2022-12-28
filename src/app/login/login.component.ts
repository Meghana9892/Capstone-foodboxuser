import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:UserserviceService){}

  user:User = new User;
  result:any;
  ngOnInit(): void {
    
   
  }

  public loginuser()
  {
    if((this.user.email=="") || (this.user.password==""))
    {
      alert("Enter Credentials");
    }
    else{
    let response = this.service.login(this.user);
    response.subscribe((data)=> {
      if(data==="true")
      {
        this.router.navigate(['/home'])
        localStorage.setItem('loggedin',this.user.email)
      }
      else{
        alert("Invalid email or password")
      }

    })
    }
  }

}
