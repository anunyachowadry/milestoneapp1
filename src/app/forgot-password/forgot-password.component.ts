import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  Form: any;
  products: any;
  details: any=[];
  text: any;
  sign: any;
  Email:any;
  constructor(private router:Router) {
    this.getProduct()
   }

  ngOnInit(): void {
    this.Form = new FormGroup({
      Email:new FormControl(""),
      Password: new FormControl("")     
    })

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
  }

  login(){
    this.router.navigate(["/login"])
  }

    //This is for product getting (gett) call 
    getProduct(){    
      fetch("http://localhost:2000/signupform/getsignupdetails", {
     method:'get',
     headers:{
       "Access-Control-Allow-Origin": "*",
       "Content-Type":'application/json'
     },
     body:JSON.stringify(this.getProduct)
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result),
     this.details = result.SignupInfo
     console.log(this.details)
     }
     )     
     .catch(error => console.log('error',error))
  }

  submitForm(){    

    console.log(this.Form)
    this.sign=this.details.filter((item:any)=>item.Email=== this.Email)
    console.log(this.sign)
    fetch("http://localhost:2000/signupform/updatePassword/" + this.Form.value.Email, {
      method: 'PUT',
      headers: {
        "Access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.Form.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
        console.log(this.Form.value.Email)


          this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
        console.log(this.products)
              
      }
      ).catch(err =>
        console.log(err))
   

  }

}
