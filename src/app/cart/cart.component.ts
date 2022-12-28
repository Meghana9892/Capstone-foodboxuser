import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:ProductserviceService,private route:Router){}

  cart:any;
  total:any;

  email:any;
  output:any;

  ngOnInit(): void {
   let response = this.service.viewCart();
    response.subscribe((data)=> this.cart=data)

    let response2 = this.service.carttotal()
    response2.subscribe((data)=>this.total=data)
  }

  public payments()
  {
    let response = this.service.viewCart();
    response.subscribe((data)=> {
      if(data==null)
      {
        alert("Cart is empty")
      }
      else{
        this.route.navigate(['/payment'])
      }

  })
    
  }
  
  public back()
  {
    this.route.navigate(['/home'])
  }

}
