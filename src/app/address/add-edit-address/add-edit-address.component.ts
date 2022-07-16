import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.css']
})
export class AddEditAddressComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() addres:any;
  AddressId:string='';
  AddressName:string='';

  ngOnInit(): void {
    this.AddressId=this.addres.id;
    this.AddressName=this.addres.description;
  }

  addAddress(){
    var val = {Id:this.AddressId,
      Description:this.AddressName};
    this.service.addAddress(val).subscribe(res=>{
      if(res==null)
      {
        alert("Added successfully !!!");
      }
    });
  }

  updateAddress(){
    var val = {Id:this.AddressId,
      Description:this.AddressName};
    this.service.updateAddress(val).subscribe(res=>{
    if(res==null)
    {
      alert("Updated successfully !!!");
    }
    });
  }
}
