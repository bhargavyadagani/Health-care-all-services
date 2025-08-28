import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../docTypes';

@Injectable({
  providedIn: 'root'
})
export class Doctorservice {
  
  private apiUrl:string="http://localhost:1002/doctors";

   constructor(private http:HttpClient){}

   addDoctor(doctor:any) : Observable<any>{
      return this.http.post(`${this.apiUrl}`,doctor);
   }

   getDoctor():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.apiUrl);
   }
   deleteDoctor(id:number|undefined):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getDoctorById(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  updateDoctor(id:number,doctor:Doctor):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,doctor);
  }


}
