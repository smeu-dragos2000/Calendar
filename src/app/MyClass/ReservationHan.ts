import { Client } from './Client';
import { Reservation } from './Reservation';

export class ReservationHan {
  reservationHanFamily: Reservation = new Reservation();
  reservationHanSingle: Reservation = new Reservation();
  reservationHanDouble: Reservation = new Reservation();
  client: Client = new Client();

  constructor(){}
}
