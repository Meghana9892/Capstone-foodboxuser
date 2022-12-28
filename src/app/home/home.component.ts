import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private service:UserserviceService,
              private prodservice:ProductserviceService,
              private route:Router            ){}
  user:any;
  loggeduser:any
  products:any;
  message:any;
  
  
  prod:Product = new Product;
  
  ngOnInit(): void {

  
    this.user = localStorage.getItem('loggedin')
    let response = this.service.getUser(this.user);
    response.subscribe((data)=> this.loggeduser=data)

    let response2=this.prodservice.getProducts();
    response2.subscribe((data)=>  { 
          this.products=data 
        this.message=""})
  }
 
  public cuisine(search:any)
  {
    
    let response = this.prodservice.getbycuisine(search)
    response.subscribe((data)=> { 
      if(data==null)
      {
        this.message="No results found"
       
      }
      else{
        this.message=""
        this.products=data
      }
})
   
  }

  public additem(i:any)
  {
    this.prod=i;
    let response = this.prodservice.addtocart(this.prod);
    response.subscribe((data)=>{alert(data)
      this.message=""})
  }

  public viewcart()
  {
    this.message="";
    this.route.navigate(['/cart'])
  }
  
  public sortbyPrice()
  {
    let response = this.prodservice.sortbyPrice();
    response.subscribe((data)=>{this.products=data
      this.message=""})
  }

  public sortbyProductname()
  {
    let response = this.prodservice.sortbyProductname();
    response.subscribe((data)=>{this.products=data
      this.message=""})
  }

  public searchbyProductname(search:any)
  {
    
    if(search=="")
    {
      alert("Enter item to search")
    }
    else{
      let response = this.prodservice.searchby(search);
    response.subscribe((data)=>{
      if(data==null)
      {
        this.message="No results found"
       
      }
      else{
      this.products=data
      this.message=""
      }
    })
    }
   
  }

  public signout()
  {
    localStorage.removeItem('loggedin')
    this.route.navigate(['/login'])
  }
}
