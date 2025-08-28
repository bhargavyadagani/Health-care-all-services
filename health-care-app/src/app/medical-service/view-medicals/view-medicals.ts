import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medical } from '../../medTypes';
import { Medicalservice } from '../../medService/medicalservice';

@Component({
  selector: 'app-view-medical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-medicals.html',
  styleUrls: ['./view-medicals.css']
})
export class ViewMedical implements OnInit {

  medicals: Medical[] = [];
  errorMessage = '';
  isLoading = true;

  constructor(
    private readonly medicalService: Medicalservice,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadMedicals();
  }

  loadMedicals() {
    this.medicalService.getMedicals().subscribe({
      next: (data) => {
        this.medicals = Array.isArray(data) ? data : [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch medical records';
        this.isLoading = false;
      }
    });
  }

  editMedical(id: number) {
    this.router.navigate(['/edit-medical', id]);
  }

  deleteMedical(id: number) {
    if (confirm('Are you sure you want to delete this medical record?')) {
      this.medicalService.deleteMedical(id).subscribe({
        next: () => this.loadMedicals(),
        error: (err) => console.error("Delete failed:", err)
      });
    }
  }
}
