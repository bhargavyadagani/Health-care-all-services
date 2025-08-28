import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Doctor } from '../../docTypes';
import { Doctorservice } from '../../docService/doctorservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-doctor',
  imports: [CommonModule],
  templateUrl: './view-doctor.html',
  styleUrls: ['./view-doctor.css']
})
export class ViewDoctor implements OnInit {

  doctors: Doctor[] = [];
  errorMessage = '';
  isLoading = true;

  constructor(private readonly doctorService: Doctorservice, private readonly cdr:ChangeDetectorRef, private readonly router: Router) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    console.log("Loading doctors...");

    this.doctorService.getDoctor().subscribe({
      next: (data) => {
        console.log("API Response:", data);
        this.doctors = Array.isArray(data) ? data : [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch doctors.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  deleteDoctor(id: number | undefined): void {
    if (confirm('Are you sure to delete this doctor?')) {
      this.doctorService.deleteDoctor(id).subscribe({
        next: () => {
          alert('Doctor deleted successfully');
          this.loadDoctors(); 
        },
        error: (err) => {
          console.error(err);
          alert("Failed to delete doctor");
        }
      });
    }
  }

  editDoctor(id: number | undefined): void {
    console.log("Inside edit doctor");
     this.router.navigate(['/edit-doctor', id]);
  }
}
