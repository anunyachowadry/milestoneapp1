import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: any;
  addProduct=true
  text: any;
  size: any;
  data:any=[]
  add:any

  constructor( private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

    
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    this.productForm = new FormGroup ({
      sid:new FormControl(0),
      imgurl :new FormControl(""),
      prodId: new FormControl(""),
      name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      thick: new FormControl(""),
      qnt: new FormControl(""),
      Quantity: new FormControl(""),
      price: new FormControl(""),
      region: new FormControl(""),
      quality: new FormControl(""),
      date: new FormControl(""),
      mobile:new FormControl(""),
      PhoneNumber:new FormControl(""),
      description: new FormControl(""),
      manufacturername:new FormControl("")
    })   

  }
  cancel(){
    this.addProduct=false
  }
  toggle(){
    this.size = !this.size
  }

  submitForm(){
    console.log(this.productForm.value)
    if(this.productForm.value.imgurl ==''||
    this.productForm.value.prodId ==''||
    this.productForm.value.name ==''||
    this.productForm.value.color ==''||
    this.productForm.value.size ==''||
    this.productForm.value.thick ==''||
    this.productForm.value.qnt ==''||
    this.productForm.value.region ==''||
    this.productForm.value.quality ==''||
    this.productForm.value.date ==''||
    this.productForm.value.Quantity ==''||

    this.productForm.value.mobile ==''||
    this.productForm.value.PhoneNumber ==''||
    this.productForm.value.description ==''||
    this.productForm.value.manufacturername ==''||
    this.productForm.value.price =='')
    { 
      Swal.fire(  
         'Cancelled',  
         'You Must  Enter All fields !',           //give for condition to take all properties take empty values
         'error'                                  //then take one alert message like not save all data
       ) 
    }else{  
       fetch("http://localhost:2000/products/addproduct", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.productForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
      //  const localdata=localStorage.getItem('rahul')
      //  if(localdata!=null){
      //   this.add=JSON.parse(localdata)
      //   console.log(this.add)
      //  }
      //  this.productForm.value.sid=this.data.length + 1;
      //  this.data.push(this.productForm.value)
      //  localStorage.setItem('rahul',JSON.stringify(this.data))
       Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
        this.router.navigate(["inventory"])
      }) 
    }
  )      
       .catch(error => console.log('error',error)) 
  }  
}
// get sid():FormControl{

//   return this.productForm.get("sid") as  FormControl;
// }
// get name():FormControl{

//   return this.productForm.get("name") as  FormControl;
// }

// get prodId():FormControl{

//   return this.productForm.get("prodId") as  FormControl;         //In this method to get all details
// }
// get color():FormControl{

//   return this.productForm.get("color") as  FormControl;
// }
// get thick():FormControl{

//   return this.productForm.get("thick") as  FormControl;
// }

// get manufacturername():FormControl{

//   return this.productForm.get("manufacturername") as  FormControl;
// }
// get qnt():FormControl{

//   return this.productForm.get("qnt") as  FormControl;
// }
// get imgurl():FormControl{
//   return this.productForm.get("imgurl") as FormControl;
// }
// get Quantity():FormControl{
//   return this.productForm.get("Quantity") as FormControl;
// }

// get price():FormControl{
//   return this.productForm.get("price") as FormControl;
// }
// get quality():FormControl{
//   return this.productForm.get("quality") as FormControl;
// }
// get date():FormControl{
//   return this.productForm.get("date") as FormControl;
// }
// get description():FormControl{
//   return this.productForm.get("description") as FormControl;
// }
// get region():FormControl{
//   return this.productForm.get("description") as FormControl;
// }

// get PhoneNumber():FormControl{
//   return this.productForm.get("PhoneNumber") as FormControl;
// }
}

   //this is for  quantity
  //  quantity:number=1;
  //  i=1
  //  plus(){
  //    if(this.i !=0){
  //      this.i++;
  //      this.quantity=this.i;
  //    }
  //  }
  //  minus(){
  //    if(this.i !=1){
  //      this.i--;
  //      this.quantity=this.i;
  //    }
  //  } 
   




 


