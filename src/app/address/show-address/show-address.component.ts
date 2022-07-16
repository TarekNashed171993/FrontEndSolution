import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-address',
  templateUrl: './show-address.component.html',
  styleUrls: ['./show-address.component.css']
})
export class ShowAddressComponent implements OnInit {

  ModalTitle:any="";
  AddressList:any=[];

  ActivateAddEditAddressComp:boolean=false;
  addres:any;

  AddressIdFilter:string="";
  AddressNameFilter:string="";
  AddressListWithoutFilter:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshAddressList();
  }
  addClick()
  {
    this.addres={
      AddressId:0,
      AddressName:""
    };
    this.ModalTitle="Add Address";
    this.ActivateAddEditAddressComp=true;
  }
  editClick(addressObj:any){
    this.addres=addressObj;
    this.ModalTitle="Edit Address";
    this.ActivateAddEditAddressComp=true;
  }
  deleteClick(id:any){
    if(confirm('are you sure to delete this address !!!'))
    {
      this.service.deleteAddress(id).subscribe(data=>{
        if(data==null)
        {
          alert("Deleted Successfully !!!");
          this.refreshAddressList();
        }
      })
    }
  };
  sortResult(prop:any,asc:any){
    this.AddressList = this.AddressListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

  FilterFn(){
    var AddressIdFilter = this.AddressIdFilter;
    var AddressNameFilter = this.AddressNameFilter;

    this.AddressList = this.AddressListWithoutFilter.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          AddressIdFilter.toString().trim().toLowerCase()
        )&&
        el.description.toString().toLowerCase().includes(
          AddressNameFilter.toString().trim().toLowerCase()
        )
    });
  }
  closeClick(){
    this.ActivateAddEditAddressComp=false;
    this.refreshAddressList();
  }
  refreshAddressList(){
    this.service.getAddressesList().subscribe(data=>
      {
        this.AddressList=data;
        this.AddressListWithoutFilter=data;
      });
  }
}
