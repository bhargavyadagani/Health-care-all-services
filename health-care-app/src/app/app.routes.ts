import { Routes } from '@angular/router';
import { ViewPatient } from './patient-service/view-patient/view-patient';
import { AddPatient } from './patient-service/add-patient/add-patient';
import { EditPatient } from './patient-service/edit-patient/edit-patient';
import { ViewDoctor } from './doctor-service/view-doctor/view-doctor';
import { AddDoctor } from './doctor-service/add-doctor/add-doctor';
import { EditDoctor } from './doctor-service/edit-doctor/edit-doctor';
import { ViewAppointment } from './appointment-service/view-appointment/view-appointment';
import { AddAppointment } from './appointment-service/add-appointment/add-appointment';
import { ViewMedical } from './medical-service/view-medicals/view-medicals';
import { AddMedical } from './medical-service/add-medicals/add-medicals';
import { EditMedicals } from './medical-service/edit-medicals/edit-medicals';
import { ViewBillings } from './Billingservice/view-billings/view-billings';
import { AddBillings } from './Billingservice/add-billings/add-billings';

export const routes: Routes = [
    {path:'patient',component: ViewPatient},
    {path:'add-patient', component:AddPatient},
    { path: 'edit-patient/:id', component: EditPatient }, 
    {path:'doctors',component:ViewDoctor},
    {path:'add-doctor', component:AddDoctor},
    {path:'edit-doctor/:id',component:EditDoctor},
    {path:'appointments', component:ViewAppointment},
    {path:'add-appointment',component:AddAppointment},
    {path:'medicals',component:ViewMedical},
    {path:'add-medical',component:AddMedical},
    {path:'edit-medical/:id',component:EditMedicals},
    {path:'billings',component:ViewBillings},
    {path:'add-billings',component:AddBillings}
  
];
