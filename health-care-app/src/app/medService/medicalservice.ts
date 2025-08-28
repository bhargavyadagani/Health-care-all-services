import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medical } from '../medTypes';

@Injectable({
  providedIn: 'root'
})
export class Medicalservice {
  
  private readonly apiUrl:string="http://localhost:1004/medical-records";

    constructor(private readonly http:HttpClient)
  {

  }

  createMedical(medical:any): Observable<any>{
    return this.http.post(`${this.apiUrl}`,medical);
  }

  getMedicals(): Observable<Medical[]> {
    return this.http.get<Medical[]>(this.apiUrl);
    }
  
    deleteMedical(id:number|undefined):Observable<any>
    {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
    getMedicalyId(id:number):Observable<any>{
        return this.http.get(`${this.apiUrl}/${id}`);
      }
    
    updateMedical(id:number, medical:Medical):Observable<any>
    {
      return this.http.put(`${this.apiUrl}/${id}`,medical);
    }
}
