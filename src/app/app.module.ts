import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './address/address.component';
import { ShowAddressComponent } from './address/show-address/show-address.component';
import { AddEditAddressComponent } from './address/add-edit-address/add-edit-address.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    ShowAddressComponent,
    AddEditAddressComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
