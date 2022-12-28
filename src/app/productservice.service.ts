import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  public getProducts()
  {
    return this.http.get("http://localhost:8019/products");
  }

  public getbycuisine(search:any)
  {
    return this.http.post("http://localhost:8019/cuisine",search);
  }

  public addtocart(product:any)
  {
    return this.http.post("http://localhost:8019/addcart",product,{responseType:'text' as 'json'});
  }

  public viewCart()
  {
    return this.http.get("http://localhost:8019/cart");
  }

  public carttotal()
  {
    return this.http.get("http://localhost:8019/carttotal");
  }

  public buy(email:any)
  {
    return this.http.post("http://localhost:8019/buy",email,{responseType:'text' as 'json'});
  }
  public searchby(search:any)
  {
    return this.http.post("http://localhost:8019/search",search);
  }

  public sortbyPrice()
  {
    return this.http.get("http://localhost:8019/sort");
  }

  public sortbyProductname()
  {
    return this.http.get("http://localhost:8019/productname");
  }

  public purchases(email:any)
  {
    return this.http.post("http://localhost:8019/purchases",email);
  }

  public getimages()
  {
    return this.http.get("http://localhost:8019/files");
  }

}
