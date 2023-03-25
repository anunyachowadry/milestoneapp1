import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blackgalaxy',
  templateUrl: './blackgalaxy.component.html',
  styleUrls: ['./blackgalaxy.component.css']
})
export class BlackgalaxyComponent implements OnInit {
  products:any=[];
  imgurl :any;
  prodId: any;
  name: any;
  color: any;
  size: any;
  thick: any;
  qnt: any;
  price: any;
  region: any;
  quality:any;
  date: any;
  mobile:any;
  description: any;
  manufacturername:any;
  PhoneNumber:any;
  searchtext:any
    cart: any;
    // cart1: any=[]
    filter: any;
  
  
  constructor(){
    this.get();
  }
  
  
    ngOnInit(): void {
      this.get();
      const localdata=localStorage.getItem('anu')
      if(localdata!=null){                                                    
        this.cart = JSON.parse(localdata)
      }
      // const localdata2=localStorage.getItem('local')
      // if(localdata2!=null){                                                    
      //   this.cart1 = JSON.parse(localdata2)
      //   console.log(this.cart1)
      // }
    
    }
  
    
  
     
    
  //increase the cartItem product
  
  anu(cart:any){
    window.location.href=("/galaxyroute")
    localStorage.setItem('anu',JSON.stringify(cart));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(cart)
   
    }
  // toggle(Name: any) {
  //   console.log(Name)
  //   this.filter = Name
  //   this.get()
  //   console.log(Name)
  // } 
  
   
  get() {
    console.log('getstoreDealer')
    fetch("http://localhost:2000/products/products" , {
      method: 'GET',
    headers: {
      "access-Control-Allow-Origin": "*",
  
    },
  
  })
    .then(response => response.json())
    .then(result => {
      console.log(result),
        this.products = result.products
  
      console.log(this.products)
  
    }
  
    ).catch(err =>
      console.log(err))
  }
  
  
  
  
  }
  


