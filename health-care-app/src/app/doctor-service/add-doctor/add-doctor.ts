import { Component } from '@angular/core';
import { Doctorservice } from '../../docService/doctorservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-doctor.html',
  styleUrl: './add-doctor.css'
})
export class AddDoctor {

  doctor={
    id:'',
    name:'',
    specialization:'',
    email:'',
    phone:'',
    available:''
  }

  message='';

  constructor(private doctorService:Doctorservice,private router:Router){}

  async onSubmit()
    {
      console.log("Submitted",this.doctor);

      this.doctorService.addDoctor(this.doctor).subscribe(
        {
          next:(response) =>{
            console.log("doctor saved: ",response);
            this.message ="doctor added sucessfully";
            this.router.navigate(['/doctors']);
          },
          error:(err)=>{
            console.error("Error while saving the doctor",err);
            this.message="error adding doctor";
          }
        }
      )
    }
}
