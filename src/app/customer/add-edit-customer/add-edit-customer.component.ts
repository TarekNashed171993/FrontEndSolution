import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() Cust:any;

  Id:string="";
  FirstName:string="";
  MiddleName:string="";
  LastName:string="";
  FamilyName:string="";
  FullName:string="";
  AddressId:string="";
  AddressName:string="";
  NationalId:string="";

  AddressesList:any=[];
  ngOnInit(): void {
    this.loadAddressList();
  }

  loadAddressList(){
    this.service.getAddressesList().subscribe((data:any)=>{
      this.AddressesList=data;

      this.Id=this.Cust.id;
      this.FirstName=this.Cust.firstName;
      this.MiddleName=this.Cust.middleName;
      this.LastName=this.Cust.lastName;
      this.FamilyName=this.Cust.familyName;
      this.FullName=this.Cust.fullName;
      this.AddressId=this.Cust.addressId;
      this.AddressName=this.Cust.addressName;
      this.NationalId=this.Cust.nationalId;
    });
  }

  addCustomer(){
    var val = {Id:this.Id,
                FirstName:this.FirstName,
                MiddleName:this.MiddleName,
                LastName:this.LastName,
                FamilyName:this.FamilyName,
                FullName:this.FirstName+' '+this.MiddleName+' '+this.LastName+' '+this.FamilyName,
                NationalId:this.NationalId,
                AddressId:this.AddressId};

    this.service.addCustomer(val).subscribe(res=>{
      if(res==null)
      {
        alert("Customer Added Successfully !!!");
      }
    });
  }

  updateCustomer(){
    var val = {Id:this.Id,
      NationalId:this.NationalId,
      AddressId:this.AddressId,
      FirstName:this.FirstName,
      MiddleName:this.MiddleName,
      LastName:this.LastName,
      FamilyName:this.FamilyName,
      FullName:this.FirstName+' '+this.MiddleName+' '+this.LastName+' '+this.FamilyName,};

    this.service.updateCustomer(val).subscribe(res=>{
      if(res==null)
      {
        alert("Customer Updated Successfully !!!");
      }
    });
  }

}
