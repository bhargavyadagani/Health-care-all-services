
export interface Billing {
  id: number;
  patientId: number;
  appointmentId: number;
  amount: number;
  status: string;
  createdAt: string; // LocalDateTime → string (ISO date format from backend)
}
