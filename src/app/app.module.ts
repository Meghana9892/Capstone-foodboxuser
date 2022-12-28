import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { SafePipe } from './safe.pipe';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    ChangepasswordComponent,
    OrderhistoryComponent,
    SafePipe,
    OrdercompleteComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
