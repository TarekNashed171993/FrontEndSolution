import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL="https://localhost:7037/api"; 
  constructor(private  http:HttpClient) {}

  // CRUD Operation for Address Object.
  getAddressesList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/address'); 
  }
  addAddress(val:any){
    return this.http.post(this.APIURL+'/address',val);
  }
  updateAddress(val:any){
    return this.http.put(this.APIURL+'/address',val);
  }
  deleteAddress(val:any){
    return this.http.delete(this.APIURL+'/address/'+val);
  }

  // CRUD Operation for Customers Object.
  getCustomers():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Customer');
  }
  addCustomer(val:any){
    return this.http.post(this.APIURL+'/Customer',val);
  }
  updateCustomer(val:any){
    return this.http.put(this.APIURL+'/Customer',val);
  }
  deleteCustomer(val:any){
    return this.http.delete(this.APIURL+'/Customer/'+val);
  }
  getAddressesNamesList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Address/GetAddressesNames' );
  }
}
