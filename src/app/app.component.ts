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
  public options=['Debit Card','Credit Card', 'EMI', 'UPI'];

  constructor(private fb:FormBuilder, private formS:FormDataService){}

  get email() {
    return this.regForm.get('email');
  }

  get firstName(){
    return this.regForm.get('firstName')
  }

  get lastName(){
    return this.regForm.get('lastName')
  }

  get phoneNumber(){
    return this.regForm.get('phoneNumber')
  }

  ngOnInit(){

    this.regForm=this.fb.group({
      userExperience:this.fb.group({
        none:[false],
        little:[false],
        some:[false],
        good:[false],
        excellent:[false]
      }),
      interest:this.fb.group({
        dataStructure:[false],
        competitiveProg:[false],
        pythonDjango:[false],
        meanStack:[false],
        mernStack:[false]
      }),
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        areaCode:['',Validators.required],
        phoneNumber:['',[Validators.required,Validators.pattern("^[0-9]{10}")]],
      email:['',[Validators.required,Validators.pattern('/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]{3,9})\.([a-z]{2,5})$/')]],
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
      dates:this.fb.group({
        may1_3:[false],
        may15_18:[false],
        june1_3:[false],
        june15_18:[false],
        july1_3:[false],
        july15_18:[false],
      }),
      paymentMethod:['',Validators.required],
      comments:[''],
      infoFromWhere:this.fb.group({
        facebook:[false],
        twitter:[false],
        youtube:[false],
        ads:[false],
        referral:[false]
      })
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
