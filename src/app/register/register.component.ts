import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private service:UserserviceService,private route:Router){}
  user:User = new User;
  
  ngOnInit(): void {
    
  }

  public register(password:any)
  {
   
    if((this.user.firstname==null) || (this.user.lastname==null) || (this.user.email==null) || (this.user.password==null) || (password==""))
    {
      alert("Enter the details");
    }
    else if (this.user.password!=password)
    {
      alert("Passwords does not match")
    }
    else
    {
       let response = this.service.adduser(this.user);
    response.subscribe((data)=>
    alert(data))
    this.route.navigate(['/login'])
    }
  }

  public back()
  {
    this.route.navigate(['/login'])
  }
}
