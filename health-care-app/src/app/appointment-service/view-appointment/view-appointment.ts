import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Appointment } from '../../appTypes';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../appService/appointmentservice';

@Component({
  selector: 'app-view-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-appointment.html',
  styleUrls: ['./view-appointment.css']
})
export class ViewAppointment implements OnInit {

  appointments: Appointment[] = [];
  errorMessage = '';
  isLoading = true;

  constructor(
    private readonly appointmentService: AppointmentService,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    console.log("Loading appointments...");

    this.appointmentService.getAllAppointments().subscribe({
      next: (data) => {
        console.log("API Response:", data);
        this.appointments = data || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch appointments.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  cancelAppointment(id: number): void {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      this.appointmentService.cancelAppointment(id).subscribe({
        next: () => {
          alert('Appointment cancelled successfully');
          this.loadAppointments(); 
        },
        error: (err) => {
          console.error(err);
          alert("Failed to cancel appointment");
        }
      });
    }
  }

  
  editAppointment(id: number): void {
    console.log("Inside edit appointment");
    this.router.navigate(['/edit-appointment', id]);
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.cancelAppointment(id).subscribe(() => {
        this.appointments = this.appointments.filter(appt => appt.id !== id);
      });
    }
  }
  
}
