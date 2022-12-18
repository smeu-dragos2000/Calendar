import { Component, OnInit, Input } from '@angular/core';
import  galerieHan  from '../../../assets/Data-json/Galerie-Han.json';
// import  tabelHan  from '../../../assets/Data-json/tabel-han.json';
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

  NumarCamere = 0;

  @Input() public GalerieHan: { image: string, thumbImage: string}[] = galerieHan;
  // @Input() public TabelHan: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: string[]}[] = tabelHan;
  @Input() public TabelHan: { tip: string, total: number, disponibil: number, capacitate: number, pret: number, zileOcupate: ZileOcupate[]}[] = tabelHan;

  constructor() { }

  ngOnInit(): void {}

  showCalendar() {
    this.displayCalendar = true;
  }
  closeCalendar() {
    this.displayCalendar = false;
  }


  selectedNumberOfRooms: number = 0;
	onSelected(value: any): void {
		this.selectedNumberOfRooms = +value;

    // console.log(this.TabelHan[1].zileOcupate)

	}

  addItem(newItem: number) {
    this.NumarCamere = newItem;
  }

}
