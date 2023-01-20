
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
  public selectedNightsArraySingleString: any[] = [];
  public selectedNumberOfRooms: number = 1;
  public showRezervaForm: boolean = false;

  private publicHttpHeaders = {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  constructor(private _http: HttpClient,  private _router: Router) { }

  getAllBusyDaysAna(){
    return this._http.get(this.baseUrl + '/busyDayAna', this.publicHttpHeaders)
  }
  getAllBusyDaysHanDouble(){
    console.log('/busyDayHanDouble')
    return this._http.get(this.baseUrl + '/busyDayHanDouble', this.publicHttpHeaders)
  }
  getAllBusyDaysHanSingle(){
    console.log('/busyDayHanSingle')
    return this._http.get(this.baseUrl + '/busyDayHanSingle', this.publicHttpHeaders)
  }
  getAllBusyDaysHanFamily(){
    return this._http.get(this.baseUrl + '/busyDayHanFamily', this.publicHttpHeaders)
  }
  getAllReservationsAna(){
    return this._http.get(this.baseUrl + '/getAllReservationAna', this.publicHttpHeaders)
  }
  getAllReservationsHan(){
    return this._http.get(this.baseUrl + '/getAllReservationHan', this.publicHttpHeaders)
  }

  bookDaysAna(){
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

  bookDaysHanSingle() {
    for(let i=0; i < this.selectedNightsArraySingleString.length; i++){
      var addBusyDay = {};
      addBusyDay = {
        busyDay: this.selectedNightsArraySingleString[i],
        noBusyRooms: this.selectedNumberOfRooms
      }
      this.callBackendHanSingle(addBusyDay).subscribe((res)=>{
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
  callBackendHanSingle(obj: any){
    return this._http.put(this.baseUrl + '/addBusyDayHanSingle', JSON.stringify(obj), this.publicHttpHeaders)
  }
  callBackendHanDouble(obj: any){
    return this._http.put(this.baseUrl + '/addBusyDayHanDouble', JSON.stringify(obj), this.publicHttpHeaders)
  }

  addReservationAna(){
    console.log(this.reservationAna)
    return this._http.post(this.baseUrl + '/addReservationAna',JSON.stringify(this.reservationAna), this.publicHttpHeaders).subscribe(res => console.log(res))
  }
  addReservationHan(){
    console.log(this.reservationHan)
    return this._http.post(this.baseUrl + '/addReservationHan', JSON.stringify(this.reservationHan), this.publicHttpHeaders).subscribe(res => console.log(res))
  }

}


