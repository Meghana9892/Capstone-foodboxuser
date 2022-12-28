import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit {

  constructor(private service:ProductserviceService,private route:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
email:any

  public buynow(cardname:any,cardnum:any,expiry:any,cvv:any)
  {
    if((cardname=="") || (cardnum=="") || (expiry=="") || (cvv=="") )
    {
      alert("Enter card details");
    }
    else{

    this.email = localStorage.getItem('loggedin');
    let response = this.service.buy(this.email);
    response.subscribe((data)=>{
      if(data=="null")
      {

        this.route.navigate(['/complete'])
      
      }
      else
      {
        alert((data))
      }
    })
    }
  }
  public back()
  {
    this.route.navigate(['/home'])
  }
}
