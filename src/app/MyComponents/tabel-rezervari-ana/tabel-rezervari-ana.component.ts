import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BusyDayService } from 'src/app/MyService/busy-day.service';

import  tabelAna  from '../../../assets/Data-json/tabel-ana - Copy.json';

import { ZileOcupate } from '../../MyClass/ZileOcupate';

import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-tabel-rezervari-ana',
  templateUrl: './tabel-rezervari-ana.component.html',
  styleUrls: ['./tabel-rezervari-ana.component.scss']
})
export class TabelRezervariAnaComponent implements OnInit {

  @Input() public clients: any = {}
  @Input() public pensiune: any = false

  @Input() public TabelAna: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: ZileOcupate[]}[] = tabelAna;

  // clients: any = {}
  clientsHan: any = {}
  clientsAna: any = {}
  zileOcupate: any;
  displayForm = false;


  constructor(private busyDayService: BusyDayService){}

  ngOnInit() {
    this.getAllReservationsAna()
    this.getAllBusyDaysAna()
  }
  getAllBusyDaysAna(){
    return this.busyDayService.getAllBusyDaysAna().subscribe((res)=>{
      this.zileOcupate = res;
    })
  }
  getAllReservationsAna(){
    return this.busyDayService.getAllReservationsAna().subscribe((res)=>{
      this.clientsAna = res;
    })
  }

  // showForm() {
  //   this.displayForm = true;
  // }
  // closeForm() {
  //   this.displayForm = false;
  // }


  displayedColumns: string[] = ['Nume', 'Prenume', 'Check-In', 'Check-Out', 'Camera', 'Email', 'Telefon', 'Acțiuni',];

  ngAfterViewInit() {
    this.clients.paginator = this.paginator;
    this.clients.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

}
