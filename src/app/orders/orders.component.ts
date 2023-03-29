import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  //   fetch("http://localhost:2000/placeorders/getAllOrders",{
  //     method:"GET",
  //     headers:{
  //       "access-Control-Allow-Origin":"*",
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(result =>{
  //     console.log(result),
  //     this.order = result.orders
  //   console.log(this.order.OrderData)
  //   console.log(this.order)
  //   for(let i = 0;i < this.order.length;i++){
  //      this.data = this.order[i]      
  //   }  
  //   }
  //   ).catch(err =>
  //     console.log('error',err))
  // }

  // getAddress(test:any){
  //   window.location.href=("/log")
  //   localStorage.setItem('Order',JSON.stringify(test));
  //   console.log(test)  
  // }
  searchtext:any
  order:any=[] 
  OrderData: any;
  name:any;
  data: any 
  date:any;
  Address: any;
  prodId:any;
  qnt:any;
  price:any;
ApproximateTime:any;
OrderStatus:any;
  orderDetails :any = []
  test: any;
  pop=false;
  count= Number

  popuporder=false;
    order2: any=[];
    datas:any=[]
    orderitems: any=[];
    Grandtotal: any;
    TotalPrice: any;
    Totalprice: any;
  List: any=[]
  order1: any=[];
  data1: any;
  data2:any=[];
  data3:any=[];
  data4:any=[];

  testi: any;
  datai: any;
  orderdatas: any;
  aa: any=[]
  local: any=[]
  mm: any;
  order3: any=[];
  text: any;
  statusdata="Placed"
 
  datePipe: any;
  myDate: any;
  constructor() { }
  anu(test:any){
    window.location.href=("/galaxyroute")
    localStorage.setItem('anu',JSON.stringify(test));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(test)


    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   
  }
  ngOnInit(): void {
    const localdata=localStorage.getItem('anu')
    if(localdata!=null){                                                    
      this.test = JSON.parse(localdata)
    }
  

    fetch("http://localhost:6900/orderRoute/getOrders",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.order = result.orders
    
    console.log(this.order)

    localStorage.setItem('ProdStatus',JSON.stringify(this.order));
    this.count=this.order.length;
    console.log(this.count)
    
    for(let i = 0;i < this.order.length;i++){
       this.data = this.order[i]      
    }  
    }
    ).catch(err =>
      console.log('error',err))

      
  }
  getAddress(test:any){
    window.location.href=("/address")
    localStorage.setItem('Order',JSON.stringify(test));
    console.log(test)  
  }
  orders(test:any){
    this.data = test
    localStorage.setItem('orderitems',JSON.stringify(test))
  }
//  placed(){
//   debugger
//   this.order1 = this.order.filter((item: any ) => item.OrderData.OrderItems.OrderStatus ==='Shipped'); 
//   console.log(this.order1)  
//   for(let i = 0;i < this.order1.length;i++){
//     this.data1 = this.order1[i]  
//     console.log(this.data1)    
//  } 
    
  
//  }   
 placed(){
  const localdata = localStorage.getItem('ProdStatus')  
  if(localdata!=null){                                                                                 
    this.order1 =JSON.parse(localdata) 
    console.log( this.order1);
  }  

this.data2.length = 0;
this.data3.length = 0;
  for(let i = 0;i < this.order1.length;i++){
    this.data1 = this.order1[i]  
    console.log(this.order1[i].OrderData.OrderItems )   
   
    this.data2.push(this.data1.OrderData.OrderItems)
    console.log(this.data2)
 } 
 for(let i = 0;i < this.data2.length;i++){
  this.data1 = this.data2[i]
 var data =this.data1[0].OrderStatus
 if(data=='Placed')
 {
  this.data3.push(this.order1[i] )
 }
this.order=this.data3
this.count=this.order.length;
 console.log(this.data3)
}  
 }   
 Shipped(){   
    const localdata = localStorage.getItem('ProdStatus')  
    if(localdata!=null){                                                                                 
      this.order1 =JSON.parse(localdata) 
      console.log( this.order1);    
  }
  this.data2.length = 0;
  this.data3.length = 0;
    for(let i = 0;i < this.order1.length;i++){
      this.data1 = this.order1[i]  
      console.log(this.order1[i].OrderData.OrderItems )   
      this.data2.push(this.data1.OrderData.OrderItems)
      console.log(this.data2)
   } 
   for(let i = 0;i < this.data2.length;i++){
    this.data1 = this.data2[i]
   this.statusdata =this.data1[0].OrderStatus
   
   if(this.statusdata=='Delivered')
   {
    this.data3.push(this.order1[i] )
   }
  this.order=this.data3
  this.count=this.order.length;
   console.log(this.data3)
   localStorage.setItem('Orderstatus',JSON.stringify(this.order))
  }  
   }   
   inprogress(){
    const localdata = localStorage.getItem('ProdStatus')  
    if(localdata!=null){                                                                                 
      this.order1 =JSON.parse(localdata) 
      console.log( this.order1);
      }
        this.data2.length = 0;
  this.data3.length = 0;
    for(let i = 0;i < this.order1.length;i++){
      this.data1 = this.order1[i]  
      console.log(this.order1[i].OrderData.OrderItems )   
      this.data2.push(this.data1.OrderData.OrderItems)
      console.log(this.data2)
   } 
   for(let i = 0;i < this.data2.length;i++){
    this.data1 = this.data2[i]
   var data =this.data1[0].OrderStatus
   if(data=='Shipped')
   {
    this.data3.push(this.order1[i] )
   }

  this.order=this.data3
  this.count=this.order.length;
   console.log(this.data3)
  }  
   }  
  
all(){
  window.location.reload();
}
}