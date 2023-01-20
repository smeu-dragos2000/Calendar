import { Component, OnInit, Input } from '@angular/core';
import { BusyDayService } from 'src/app/MyService/busy-day.service';



import  tabelAna  from '../../../assets/Data-json/tabel-ana - Copy.json';
import  tabelHan  from '../../../assets/Data-json/tabel-han - Copy.json';
import { ZileOcupate } from '../../MyClass/ZileOcupate';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  @Input() public TabelAna: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: ZileOcupate[]}[] = tabelAna;
  @Input() public TabelHan: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: ZileOcupate[]}[] = tabelHan;

  @Input() public pensiune = ''
  clientsAna: any = {}
  clientsHan: any = {}
  zileOcupate: any;
  displayAna = false;
  displayHan = false;
  displayForm = false;

  // Han
  zileOcupateFamily: any;
  zileOcupateDouble: any;

  selectedNumberOfRooms: number = 0;

  constructor(private busyDayService: BusyDayService){}

  displayAnaFunction() {
    this.displayAna = true;
    this.displayHan = false;
    this.getAllReservationsAna()
    this.getAllBusyDaysAna()
    // console.log(this.clientsAna)
  }
  displayHanFunction() {
    this.displayAna = false;
    this.displayHan = true;
    this.getAllReservationsHan()
    this.getAllBusyDaysHanDouble()
    this.getAllBusyDaysHanFamily()
    console.log(this.clientsHan)
  }

  showForm() {
    this.displayForm = true;
  }
  hideForm() {
    this.displayForm = false;
  }

  onSelected(value: any): void {
		this.selectedNumberOfRooms = +value;
	}


  // __________________________

  ngOnInit() {
    // this.getAllReservationsAna()
    this.getAllBusyDaysAna()
    // this.getAllReservationsHan()
    this.getAllBusyDaysHanDouble()
    this.getAllBusyDaysHanFamily()
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

  getAllBusyDaysHanDouble(){
    return this.busyDayService.getAllBusyDaysHanDouble().subscribe((res)=>{
      this.zileOcupateDouble = res;
    })
  }
  getAllBusyDaysHanFamily(){
    return this.busyDayService.getAllBusyDaysHanFamily().subscribe((res)=>{
      this.zileOcupateFamily = res;
    })
  }
  getAllReservationsHan(){
    return this.busyDayService.getAllReservationsHan().subscribe((res)=>{
      this.clientsHan = res;
    })
  }

}
