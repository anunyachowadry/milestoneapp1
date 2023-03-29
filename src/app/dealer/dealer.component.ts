import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  dealer:any;
  popupform=false;
  popup=false;
  data4=false
  data=false;
  popupdata=false;
datas:any;
searchtext:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  service: any;
  dealer1: any=[]
  dealers=false;
  text: any;
  aa: any;
  sign: any=[];
  List: any=[];
  array: any=[];
  SignupForm!:FormGroup;
  List1: any=[];
  add:any=[];
  Getdealer:any=[]
  location: any;
  firstname: any;
  lastname: any;
  Mobile: any;
  address: any;
  email: any;
  list:any;
  company:any;
  docId: any;
  localid: any;
  constructor() {

   }
  ngOnInit(): void {
    // this.data2();

    fetch("https://long-rose-brown-bear-kilt.cyclic.app/signupform/getsignupdetails",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(this.Get)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.sign = result.SignupInfo
    console.log(this.sign)
    }
    ).catch(err =>
      console.log('error',err))
    this.Get();
    // this.array=this.sign.filter((item:any)=>item.UserType ==='Dealer')
    // console.log(this.array)
    // this.data=true;
    // this.data4=false;
    
    this.localid=JSON.parse(localStorage.getItem('docId')|| '{}')
    
    // this.send = new FormGroup({
    //     To: new FormControl(),
    //     Subject : new FormControl(''),
    //     Message : new FormControl(''),
    //   });
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa) 
  }
  Get(){
  
  }
//   sendmail(dealer:any){
// this.popupdata=true;
// this.registerForm = dealer
//   } 
//   Delete(_id:any){
// Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!'
// }).then((result) => {
//     console.log(_id)
//       fetch("http://localhost:7500/dealer/deletedealer/" + _id,{
//        method:'DELETE',
//        headers:{
//          "access-Control-Allow-Origin":"*"
//        },
//       })
//       .then(response => response.json())
//       .then(result=>{
//        console.log(result)
//        this.Get()
//         if (result.isConfirmed) {
//           Swal.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//           )
//         }
//       })
//       }
//       ).catch(err =>
//        console.log(err))    
//    }
  //  Edit(sign:any){
  //       this.popupform=true;
  //       this.SignupForm = sign
  //       localStorage.setItem('edit',JSON.stringify(sign))
  //     }
      remove(){
        this.popupform=false;
        this.popupdata=false;
      }
data3(){
  this.data4=true;
  this.data=false;
  fetch("http://localhost:2000/dealer/getdealer",{
    method:"GET",
    headers:{
      "access-Control-Allow-Origin":"*",
    },
 
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.List1 = result.dealerInfo
  console.log(this.List1)
  }
  ).catch(err =>
    console.log('error',err))
}
Dealer(){
  this.dealers=true;
}
  data2(){
    this.array=this.sign.filter((item:any)=>item.UserType ==='Dealer')
    console.log(this.array)
     this.data=true;
    this.data4=false;
  }
  dealer2(data:any){  
    fetch("http://localhost:2000/dealer/adddealer",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
    body:JSON.stringify(data)
    
    })  .then(response => response.json())
    
    .then(result =>{
      this.docId=result.dealerInfo._id
      localStorage.setItem('docId',JSON.stringify(this.docId))
      console.log(this.docId)
      Swal.fire('Added to Mydealers!', '', 'success').then(() => {
     
      });
    }
      )
    .catch(error => console.log('error',error)); 
      }  

      dealerform(List1:any){
        this.text=List1
        localStorage.setItem('dataform',JSON.stringify(List1))

      }
  
  }
  
  

