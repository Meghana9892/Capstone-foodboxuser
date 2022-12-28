import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit{

  constructor(private service:ProductserviceService,
              private route:Router){}
 
  email:any;
  purchases:any;
  ngOnInit(): void {
    
    this.email=localStorage.getItem('loggedin')
    let response = this.service.purchases(this.email)
    response.subscribe((data)=>this.purchases=data)
  }

  public back()
  {
    this.route.navigate(['/home'])
  }
}
