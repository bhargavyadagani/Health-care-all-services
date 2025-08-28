import { ChangeDetectorRef, Component } from '@angular/core';
import { Doctorservice } from '../../docService/doctorservice';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-doctor',
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-doctor.html',
  styleUrl: './edit-doctor.css'
})
export class EditDoctor {
  doctor={
    id:0,
    name:'',
    specialization:'',
    email:'',
    phone:'',
    available:false
  }

  message='';

  constructor(private route:ActivatedRoute, private doctorService:Doctorservice,private router:Router,private cdr:ChangeDetectorRef){}

  id!:number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.loadpatient();
  }

  loadpatient()
  {
    console.log(this.id);
    this.doctorService.getDoctorById(this.id).subscribe({
      next: (data)=>{
        console.log(data);
        this.doctor = data;
        this.cdr.detectChanges();
      },
      error:(err)=>console.error(err)
    });
  }
  onSubmit() {
    this.doctorService.updateDoctor(this.id,this.doctor).subscribe({
      next: () => {
        alert("doctor updated successfully");
         this.router.navigate(['/doctors']);
      },
      error: (err)=>{
        console.error(err);
        alert("Failed to update patient !");
      }
    })
}
  onUpdate(form: any) {
    if (form.valid) {
      console.log("Updated Patient:", this.doctor);
      
    }
  }

}
