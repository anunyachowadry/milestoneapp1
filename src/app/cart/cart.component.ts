import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
    OrderItems:any;
    cartItem: number = 0;
    Totalprice:any;
  Get: any;
  sign: any=[]

    constructor() { }
  
    ngOnInit() {
      this.CartDetails() // get the data
      this.loadCart() // total product amount
      this.cartItemFunc()
    
    }
    
  
    getCartDetails: any = [];
    // get the details into localstorage
    CartDetails() {
      if (localStorage.getItem('anunya')) {          // localCartis a key
        this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');
      }
    }
  
    incQnt(prodId: any, qnt: any) {  // increase the qnt product 
      for (let i = 0; i < this.getCartDetails.length; i++) {   // this is forloop
        if (this.getCartDetails[i].prodId === prodId) {  // based on the prodId
          if (qnt != 1000)
            this.getCartDetails[i].qnt = parseInt(qnt) + 1;  // increase the qnt max5
        }
      }
      localStorage.setItem('anunya', JSON.stringify(this.getCartDetails)); // localCart is akey ,getCartDetails is aarray
      this.loadCart()
    }
  
    decQnt(prodId: any, qnt: any) {   // decrease the qunt product
      for (let i = 0; i < this.getCartDetails.length; i++) {  // thi is for loop
        if (this.getCartDetails[i].prodId === prodId) { // decrease the product based on the id
          if (qnt != 1)
            this.getCartDetails[i].qnt = parseInt(qnt) - 1;  // decrease the product lessthan 1
        }
      }
      localStorage.setItem('anunya', JSON.stringify(this.getCartDetails)); // localCart is akey ,getCartDetails is aarray
      this.loadCart()
    }
  
    // total amount
    grandtotal: any;
    //total function
    loadCart() {
      if (localStorage.getItem('anunya')) {
        this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');
        this.grandtotal = this.getCartDetails.reduce(function (acc: any, val: { price: any; qnt: any; }) {   // acc is a name,val isa rate
          return acc + (val.price * val.qnt);  // return the total amount
        }, 0);
      }
    }
  
    //remove all item
    removeall() {
      localStorage.removeItem('anunya');
      this.getCartDetails = [];
      this.grandtotal = 0;
      window .location.reload()
    }
    // single delete
    singleDelete(cart: any) {
      console.log(cart);  // show in console
      
      if (localStorage.getItem('anunya')) {
        this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');  // get the details in localstorage
       
        for (let i = 0; i < this.getCartDetails.length; i++) {   // for loop
          if (this.getCartDetails[i].prodId === cart) {    //show based on id to delete product 
            this.getCartDetails.splice(i, 1);  // delete product one by one
            localStorage.setItem('anunya', JSON.stringify(this.getCartDetails)); // localcartis akey, getCartDetails is array
            this.loadCart();
            this.CartDetails();
            this.cartItemFunc()  
          }
        }
      }
     
        window .location.reload()
  
    
      
        // localStorage.removeItem('anunya');
        

      }
    
    cartItemFunc() {
      if (localStorage.getItem('anunya') != null) {
        var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
        this.cartItem = cartCount.length;  
      }
    }
    
    
  }


