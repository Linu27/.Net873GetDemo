import { Component, OnInit } from '@angular/core';
import {Contact} from '../Models/contact.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cont:Contact[]=[
    {fname:"Eric",lname:"Elliot",phone:"222-555-6575"},
    {fname:"Steve",lname:" Jobs",phone:"220-454-6754"},
    {fname:"Fred",lname:" Allen",phone:"210-657-9886"},
    {fname:"Steve",lname:" Wozniak",phone:"343-657-8786"},
    {fname:"Bill",lname:" Gates",phone:"234-567-9789"},

  ];
  OnEntering(phonebookform:NgForm){
    console.log(phonebookform.value)
  }
  getcontinfo:any={};
  public searchText:any;
  Message;

  constructor() { }
  addcontact(){
   
    this.cont.push(this.getcontinfo);
    this.getcontinfo={};
    alert("Contact Added Successfully")
  }
  deleteContact(i)
  {
    console.log(i)
    this.cont.splice(i,1);
  }
  indexvalue;

  ngOnInit() {
  }

}
