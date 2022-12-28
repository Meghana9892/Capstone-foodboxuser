import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'password',
    component:ChangepasswordComponent
  },
  {
    path:'purchases',
    component:OrderhistoryComponent
  },
  {
    path:'complete',
    component:OrdercompleteComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
