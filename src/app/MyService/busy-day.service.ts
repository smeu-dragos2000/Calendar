
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReservationAna } from '../MyClass/ReservationAna';
import { ReservationHan } from '../MyClass/ReservationHan';

@Injectable({
  providedIn: 'root'
})
export class BusyDayService {

  private baseUrl = environment.baseUrl;
  public reservationAna: ReservationAna = new ReservationAna();
  public reservationHan: ReservationHan = new ReservationHan();
  public selectedNightsArrayString: any[] = [];
  public selectedNightsArrayDoubleString: any[] = [];
  public selectedNumberOfRooms: number = 1;

  private publicHttpHeaders= {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  constructor(private _http: HttpClient,  private _router: Router) { }

  getAllBusyDaysAna(){
    return this._http.get(this.baseUrl + '/busyDayAna', this.publicHttpHeaders)
  }
  getAllBusyDaysHanDouble(){
    return this._http.get(this.baseUrl + '/busyDayHanDouble', this.publicHttpHeaders)
  }
  getAllBusyDaysHanFamily(){
    return this._http.get(this.baseUrl + '/busyDayHanFamily', this.publicHttpHeaders)
  }

  bookDaysAna(){
    console.log(this.selectedNightsArrayString)
    for(let i=0; i< this.selectedNightsArrayString.length; i++){
      var addBusyDay = {};
      addBusyDay = {
        busyDay: this.selectedNightsArrayString[i],
        noBusyRooms: 1
      }
      this.callBackendAna(addBusyDay).subscribe((res)=>{
        console.log(res)
      },
      err =>{
        console.log(err)
      })
    }
  }

  bookDaysHanFamily() {
    for(let i=0; i< this.selectedNightsArrayString.length; i++){
      var addBusyDay = {};
      addBusyDay = {
        busyDay: this.selectedNightsArrayString[i],
        noBusyRooms: this.selectedNumberOfRooms
      }
      this.callBackendHanFamily(addBusyDay).subscribe((res)=>{
        console.log(res)
      },
      err =>{
        console.log(err)
      })
    }
  }

  bookDaysHanDouble() {
    for(let i=0; i< this.selectedNightsArrayDoubleString.length; i++){
      var addBusyDay = {};
      addBusyDay = {
        busyDay: this.selectedNightsArrayDoubleString[i],
        noBusyRooms: this.selectedNumberOfRooms
      }
      this.callBackendHanDouble(addBusyDay).subscribe((res)=>{
        console.log(res)
      },
      err =>{
        console.log(err)
      })
    }
  }

  callBackendAna(obj: any){
    return this._http.put(this.baseUrl + '/addBusyDayAna', JSON.stringify(obj), this.publicHttpHeaders)
  }
  callBackendHanFamily(obj: any){
    return this._http.put(this.baseUrl + '/addBusyDayHanFamily', JSON.stringify(obj), this.publicHttpHeaders)
  }
  callBackendHanDouble(obj: any){
    return this._http.put(this.baseUrl + '/addBusyDayHanDouble', JSON.stringify(obj), this.publicHttpHeaders)
  }

  addReservationAna(){
    console.log(this.reservationAna)

    return this._http.put(this.baseUrl + '/addReservationAna',JSON.stringify(this.reservationAna), this.publicHttpHeaders)
  }
  addReservationHan(){
    console.log(this.reservationHan)
    return this._http.put(this.baseUrl + '/addReservationHan', JSON.stringify(this.reservationHan), this.publicHttpHeaders)

  }

}


