import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  text: any;
  searchtext:any
  
  products:any=[]

  constructor( private router:Router,private service:UpdateService) { 
   }

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     this.getProduct(); 
  }

   //this is for quantity function
   quantity:number=1;
   i=1
   plus(){
     if(this.i !=0){
       this.i++;
       this.quantity=this.i;
     }
   }
   minus(){
     if(this.i !=1){
       this.i--;
       this.quantity=this.i;
     }
   } 
 
   //This is for product getting (gett) call 
   getProduct(){
    var data={
      mobile:this.text.mobile
    }    
     fetch("https://lime-defiant-gecko.cyclic.app/products/getproduct", {
    method:'post',
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Content-Type":'application/json'
    },
    body:JSON.stringify(data)
  }).then(res=> res.json())
  .then(result=>{ 
    console.log(result),
    this.products = result.ProductInfo
    }
    )     
    .catch(error => console.log('error',error))
 }
 
 //This is for product delete
 delete(prodId:any){  
   console.log(Number)
     fetch("https://lime-defiant-gecko.cyclic.app/products/deleteproduct/" + prodId,{
      method:'DELETE',
      headers:{
        "access-Control-Allow-Origin":"*"
      },
     })
     .then(response => response.json())
     .then(result=>{
      console.log(result)
      this.getProduct()
      alert('ok')
    })     
     .catch(err =>
      console.log(err))    
  } 

  //this is for edit the product
  edit(products:any){   
   localStorage.setItem('product',JSON.stringify(products))   
 }
  
  description(product:any){
    window.location.href=("/prod-data")
    localStorage.setItem('Description',JSON.stringify(product));
    console.log(product)  
  }


}
