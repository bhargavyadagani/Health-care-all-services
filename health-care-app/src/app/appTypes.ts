import { Doctor } from "./docTypes";


export interface Appointment {
  id: number;  
  patientId: number;
  doctor?: Doctor;  
  appointmentTime: string;
  status: string;
}

