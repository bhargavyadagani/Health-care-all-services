import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillingService } from '../../billService/billingservice';

@Component({
  selector: 'app-add-billings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-billings.html',
  styleUrls: ['./add-billings.css']
})
export class AddBillings {

  patientId!: number;
  appointmentId!: number;
  message = '';

  constructor(private readonly billingService: BillingService, private readonly router: Router) {}

  async onSubmit() {
    console.log("Generating Bill for Patient:", this.patientId, "Appointment:", this.appointmentId);

    this.billingService.generateBill(this.patientId, this.appointmentId).subscribe({
      next: (response) => {
        console.log("Generated Bill: ", response);
        this.message = "Bill generated successfully";
        this.router.navigate(['/billings']);  
      },
      error: (err) => {
        console.error("Error generating bill", err);
        this.message = "Error generating bill";
      }
    });
  }
}
