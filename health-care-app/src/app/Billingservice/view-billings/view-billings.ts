import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BillingService } from '../../billService/billingservice';
import { Billing } from '../../billTypes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-billings',
    imports: [CommonModule,FormsModule],
  templateUrl: './view-billings.html',
  styleUrls: ['./view-billings.css']
})
export class ViewBillings implements OnInit {

  billings: Billing[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private readonly billingService: BillingService,private readonly cdr:ChangeDetectorRef, private readonly router: Router) {}

  ngOnInit(): void {
    this.getAllBillings();
  }

  getAllBillings(): void {
    this.loading = true;
    this.billingService.getAllBillings().subscribe({
      next: (data) => {
        this.billings = data;
        this.loading = false;
        this.cdr.detectChanges();

      },
      error: (err) => {
        this.errorMessage = 'Error fetching billings!';
        console.error(err);
        this.loading = false;
      }
    });
  }

  payBill(billId: number): void {
    this.billingService.payBill(billId).subscribe({
      next: (updatedBill) => {
        this.billings = this.billings.map(bill => 
          bill.id === updatedBill.id ? updatedBill : bill
        );
        alert(`Bill #${billId} paid successfully!`);
      },
      error: (err) => {
        alert('Error paying bill!');
        console.error(err);
      }
    });
  }
}
