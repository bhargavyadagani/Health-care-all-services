import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Medicalservice } from '../../medService/medicalservice';

@Component({
  selector: 'app-add-medical',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-medicals.html',
  styleUrls: ['./add-medicals.css'] 
})
export class AddMedical {

  medical = {
    id: '',
    patientId: '',
    doctorId: '',
    visitDate: '',
    diagnosis: '',
    prescription: '',
    labResults: ''
  };

  message = '';

  constructor(private readonly medicalService: Medicalservice, private readonly router: Router) {}

  onSubmit() {
    console.log("Submitted", this.medical);

    this.medicalService.createMedical(this.medical).subscribe({
      next: (response) => {
        console.log("Medical record saved:", response);
        this.message = "Medical record added successfully";
        this.router.navigate(['/medicals']);   
      },
      error: (err) => {
        console.error("Error while saving medical record:", err);
        this.message = "Error adding medical record";
      }
    });
  }
}
