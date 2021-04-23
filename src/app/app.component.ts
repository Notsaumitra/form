import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from './form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  regForm:FormGroup;
  errMessage:any;

  constructor(private fb:FormBuilder, private formS:FormDataService){}

  ngOnInit(){
    this.regForm=this.fb.group({
      name:this.fb.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required]
      }),
      phone:this.fb.group({
        areaCode:[null,Validators.required],
        phoneNumber:[null,Validators.required]
      }),
      email:['',Validators.required],
      address:this.fb.group({
        street:['',Validators.required],
        streetLine2:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        pinCode:[null,Validators.required]
      }),
      occupation:['',Validators.required],
      companyName:['',Validators.required],
      jobPosition:['',Validators.required],
      paymentMethod:['',Validators.required],
      comments:['']
    })
  }

  onSubmit(regForm){
    console.log(regForm.value);
    this.formS.postUsers(regForm.value).
    subscribe(
      data=>{
        console.log("success",data)
      },
      err=>this.errMessage=err.statusText
    )
  }
}
