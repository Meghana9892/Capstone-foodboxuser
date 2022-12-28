import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

   constructor(private service:UserserviceService,private route:Router){}
   
   user:User = new User;
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public changepassword(password:string)
  {
   
    var p1=password;
    var p2=this.user.password;
    if((password=="") || (p2==null))
    {
      alert("Enter the details")
    }
    else if(password!=p2)
    {
      alert("Entries does not match")
    }
    else{
    this.user.email=localStorage.getItem('loggedin')
    let response = this.service.changepassword(this.user);
    response.subscribe((data)=>alert(data))
    this.route.navigate(['/home'])
    }
  }

  public back()
  {
    this.route.navigate(['/home'])
  }
  

}
