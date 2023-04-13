import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormGroup, FormBuilder, Validators} from '@angular/forms' ;
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'contactforms';
  contactForms!: FormGroup;
  inSubmit = true;
  submitMessage='';
  name: any;

  private myForm: AngularFirestoreCollection<any>;

  constructor(private formBuilder: FormBuilder, private firstore: AngularFirestore) { 

  }

  ngOnInit() {
    
    this.myForm = this.firstore.collection('enquiry');

    this.contactForms = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      message:[null,Validators.required],
      subject:[null,Validators.required]
    })
  }

  submitData(value:any){
    // console.log(value);

    this.myForm.add(value).then(res=>{
    this.submitMessage = 'submitted Successfullu';
   })
   .catch(err =>{
    console.log(err)
   })
    this.inSubmit =  true;
    // this.submitMessage = 'Submitted Successfully....😎';
    setTimeout(()=>{
      this.inSubmit = false;
    },8000);

  }
}
