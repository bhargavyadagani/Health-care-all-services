import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../appTypes';
import { AppointmentService } from '../../appService/appointmentservice';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-appointment.html',
  styleUrls: ['./add-appointment.css']
})
export class AddAppointment {
  appointment = {
    patientId: 0,
    doctorId: 0,
    appointmentTime: ''
  };

  message = '';

  constructor(private readonly appointmentService: AppointmentService, private readonly router: Router) {}

  onSubmit() {
    console.log("Booking appointment:", this.appointment);

    this.appointmentService
      .bookAppointment(this.appointment.patientId, this.appointment.doctorId, this.appointment.appointmentTime)
      .subscribe({
        next: (response: Appointment) => {
          console.log("Appointment booked:", response);
          this.message = "Appointment added successfully!";
          this.router.navigate(['/appointments']); 
        },
        error: (err) => {
          console.error("Error booking appointment", err);
          this.message = "Error adding appointment!";
        }
      });
  }
}
