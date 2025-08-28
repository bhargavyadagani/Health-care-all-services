import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../appTypes';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private readonly apiUrl: string = "http://localhost:1883/appointments";

  constructor(private readonly http: HttpClient) {}

  bookAppointment(patientId: number, doctorId: number, appointmentTime: string): Observable<Appointment> {
    const params = new HttpParams()
      .set('patientId', patientId.toString())
      .set('doctorId', doctorId.toString())
      .set('time', appointmentTime); 

    return this.http.post<Appointment>(`${this.apiUrl}`, null, { params });
  }

  cancelAppointment(id: number): Observable<string> {
    return this.http.post(`${this.apiUrl}/${id}`, {}, { responseType: 'text' });
  }

  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/${id}`);
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }
}
