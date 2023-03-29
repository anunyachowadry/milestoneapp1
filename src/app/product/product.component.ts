import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any=[];
 
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
  searchtext:any;
  getbyName:any;

    cart: any;
    adddata:any=[]
    // cart1: any=[]
    filter: any;
  Image:any;
  Name:any;
  dealer:any;
  
  constructor(){
    this.get();
  }
  
  
    ngOnInit(): void {
      this.get();    
    }
  
    
  
     
    
  //increase the cartItem product
  
  anu(cart:any){
    window.location.href=("/galaxyroute")
    localStorage.setItem('anu',JSON.stringify(cart));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(cart)
   
  }

  
   
 
    get() {
      console.log('getstoreDealer')
      fetch("http://localhost:1000/dealerRouter/dealers", {
        method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.dealer = result.dealer

        console.log(this.dealer)
       

      }

      ).catch(err =>
        console.log(err))
  }
  getproducts(data:any){
    localStorage.setItem('rahul',JSON.stringify(data))
  }
}




  
  




