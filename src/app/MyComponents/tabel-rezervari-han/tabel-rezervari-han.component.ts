import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BusyDayService } from 'src/app/MyService/busy-day.service';

import  tabelHan  from '../../../assets/Data-json/tabel-han - Copy.json';
import { ZileOcupate } from '../../MyClass/ZileOcupate';

@Component({
  selector: 'app-tabel-rezervari-han',
  templateUrl: './tabel-rezervari-han.component.html',
  styleUrls: ['./tabel-rezervari-han.component.scss']
})
export class TabelRezervariHanComponent {

  @Input() public clients: any = {}
  @Input() public pensiune: any = false
  @Input() public TabelHan: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: ZileOcupate[]}[] = tabelHan;

  clientsHan: any = {}
  zileOcupate: any;
  displayForm = false;

  constructor(private busyDayService: BusyDayService){}

  ngOnInit() {
    this.getAllReservationsHan()
    this.getAllBusyDaysHanFamily()
    this.getAllBusyDaysHanDouble()
  }
  getAllBusyDaysHanFamily(){
    return this.busyDayService.getAllBusyDaysHanFamily().subscribe((res)=>{
      this.zileOcupate = res;
    })
  }
  getAllBusyDaysHanDouble(){
    return this.busyDayService.getAllBusyDaysHanDouble().subscribe((res)=>{
      this.zileOcupate = res;
    })
  }
  getAllReservationsHan(){
    return this.busyDayService.getAllReservationsHan().subscribe((res)=>{
      this.clientsHan = res;
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
