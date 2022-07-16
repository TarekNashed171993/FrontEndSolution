import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle:string='';
  ActivateAddEditCustComp:boolean=false;
  Cust:any;


  ngOnInit(): void {
    this.refreshCustList();
  }

  addClick(){
    this.Cust={
      id:0,
      firstName:"",
      middleName:"",
      lastName:"",
      familyName:"",
      fullName:"",
      addressId:"",
      addressName:"",
      nationalId:""
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.Cust=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(item).subscribe(data=>{
       // alert(data.toString());
        this.refreshCustList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCustComp=false;
    this.refreshCustList();
  }


  refreshCustList(){
    this.service.getCustomers().subscribe(data=>{
      this.CustomerList=data;
    });
  }

}
