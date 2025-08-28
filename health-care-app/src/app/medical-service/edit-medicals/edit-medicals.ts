import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Medicalservice } from '../../medService/medicalservice';

@Component({
  selector: 'app-edit-medicals',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-medicals.html',
  styleUrls: ['./edit-medicals.css']
})
export class EditMedicals {
  medical = {
    id: 0,
    patientId: 0,
    doctorId: 0,
    visitDate: '',
    diagnosis: '',
    prescription: '',
    labResults: ''
  };

  message = '';
  id!: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly medicalService: Medicalservice,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadMedical();
  }

  loadMedical() {
    console.log("Editing Medical ID:", this.id);
    this.medicalService.getMedicalyId(this.id).subscribe({
      next: (data) => {
        console.log("Fetched Medical Record:", data);
        this.medical = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error fetching medical record:", err)
    });
  }

  onSubmit() {
    this.medicalService.updateMedical(this.id, this.medical).subscribe({
      next: () => {
        alert("Medical record updated successfully ");
        this.router.navigate(['/medicals']); 
      },
      error: (err) => {
        console.error(err);
        alert("Failed to update medical record ");
      }
    });
  }

  onUpdate(form: any) {
    if (form.valid) {
      console.log("Updated Medical Record:", this.medical);
    }
  }
}
