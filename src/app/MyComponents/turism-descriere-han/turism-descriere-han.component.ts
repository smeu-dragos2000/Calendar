import { Component, OnInit, Input } from '@angular/core';
import { BusyDayService } from 'src/app/MyService/busy-day.service';

import  galerieHan  from '../../../assets/Data-json/Galerie-Han.json';

import  tabelHan  from '../../../assets/Data-json/tabel-han - Copy.json';

import { ZileOcupate } from '../../MyClass/ZileOcupate';
@Component({
  selector: 'app-turism-descriere-han',
  templateUrl: './turism-descriere-han.component.html',
  styleUrls: ['./turism-descriere-han.component.scss']
})
export class TurismDescriereHanComponent implements OnInit {

  // URL Buttons
  linkFacebookHan = "https://www.facebook.com/hanulvanatoruluigorj/";
  linkBookingHan = "https://www.booking.com/hotel/ro/casa-vanatorului-comuna-pestisani.ro.html?aid=304142;label=gen173nr-1FCAMowAFCCXBlc3Rpc2FuaUggWARowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AurCrI4GwAIB0gIkZWY4NTFjZTgtZTBlMS00ODhiLTgwNjEtMmQ5NWRiYjMxYTk32AIF4AIB;sid=0b0fa2b531b84774c89abd138acb0c13;atlas_src=sr_iw_btn;dest_id=-1166429;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&";
  displayCalendar = false;

  zileOcupate: any;
  zileOcupateFamily: any;
  zileOcupateSingle: any;
  zileOcupateDouble: any;

  showRezervaForm = this.busyDayService.showRezervaForm;
  showForm = true;
  dontShowForm = false;

  selectedNumberOfRooms: number = 0;
  // NumarCamere = 0;

  @Input() public GalerieHan: { image: string, thumbImage: string}[] = galerieHan;
  // @Input() public TabelHan: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: string[]}[] = tabelHan;
  @Input() public TabelHan: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: ZileOcupate[]}[] = tabelHan;

  constructor(private busyDayService: BusyDayService){}

  ngOnInit() {
    this.getAllBusyDaysHanDouble();
    this.getAllBusyDaysHanSingle();
    this.getAllBusyDaysHanFamily();
  }
  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.showRezervaForm = this.busyDayService.showRezervaForm;
  }

  showCalendar() {
    this.displayCalendar = true;
  }
  closeCalendar() {
    this.displayCalendar = false;
  }

  getAllBusyDaysHanDouble(){
    return this.busyDayService.getAllBusyDaysHanDouble().subscribe((res)=>{
      this.zileOcupateDouble = res;
      console.log(this.zileOcupateDouble)
    })
  }
  getAllBusyDaysHanSingle(){
    return this.busyDayService.getAllBusyDaysHanSingle().subscribe((res)=>{
      this.zileOcupateSingle = res;
      console.log(res)
    })
  }
  getAllBusyDaysHanFamily(){
    return this.busyDayService.getAllBusyDaysHanFamily().subscribe((res)=>{
      this.zileOcupateFamily = res;
    })
  }

	onSelected(value: any): void {
		this.selectedNumberOfRooms = +value;
	}

}
