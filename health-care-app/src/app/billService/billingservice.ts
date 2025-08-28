import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from '../billTypes';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private readonly apiUrl: string = "http://localhost:1005/billing"; 

  constructor(private readonly http: HttpClient) { }


  generateBill(patientId: number, appointmentId: number): Observable<Billing> {
    return this.http.post<Billing>(`${this.apiUrl}/generate/${patientId}/${appointmentId}`, {});
  }


  payBill(billId: number): Observable<Billing> {
    return this.http.put<Billing>(`${this.apiUrl}/pay/${billId}`, {});
  }


  getBillsForPatient(patientId: number): Observable<Billing[]> {
    return this.http.get<Billing[]>(`${this.apiUrl}/patient/${patientId}`);
  }

  getBillById(billId: number): Observable<Billing> {
    return this.http.get<Billing>(`${this.apiUrl}/${billId}`);
  }

  getAllBillings(): Observable<Billing[]> {
    return this.http.get<Billing[]>(this.apiUrl);
  }
}
