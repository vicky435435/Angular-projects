import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit{
  
  empForm:FormGroup;
  education: string[]=['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate']

  constructor(private fb:FormBuilder, private serviceService: ServiceService, private dialogref:MatDialogRef<AddEditEmpComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any){
    this.empForm = this.fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      exp:'',
      package:''
    })

  }

  ngOnInit(): void {
   this.empForm.patchValue(this.data)
  }

  onFormSubmit(){
   if (this.empForm.valid) {
    if (this.data) {
      this.serviceService.updateEmplyeeById(this.data.id,this.empForm.value).subscribe({
        next : (val:any)=>{
          alert('employee details updated Successfully')
          this.dialogref.close(true)
        },
        error :(err)=>console.log("error", err),
      })
    } else { 
    this.serviceService.addEmployee(this.empForm.value).subscribe({
      next : (val:any)=>{
        alert('Data Saved Successfully')
        this.dialogref.close(true)
      },
      error :(err)=>console.log("error", err),
    })
    }
   }
  }


}
