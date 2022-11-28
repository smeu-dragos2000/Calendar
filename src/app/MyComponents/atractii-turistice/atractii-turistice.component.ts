import { Component, OnInit, Input,  ElementRef } from '@angular/core';
import  atractii  from '../../../assets/Data-json/atractii.json';

@Component({
  selector: 'app-atractii-turistice',
  templateUrl: './atractii-turistice.component.html',
  styleUrls: ['./atractii-turistice.component.scss']
})
export class AtractiiTuristiceComponent implements OnInit {

  @Input() public Atractii: {id: number, title: string, imageURL: string, thumbURL:string, text: string}[] = atractii;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  showModal(event: any) {
     // get target ID
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.value;

    let elementClick = this.el.nativeElement.parentElement.parentElement;
    let itemModal = elementClick.getElementsByClassName('modal')

    itemModal[id].style.setProperty('display', 'block')
  }

  closeModal(event: any) {
    // get target ID
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.value;

    let elementClick = this.el.nativeElement.parentElement.parentElement;
    let itemModal = elementClick.getElementsByClassName('modal')

    itemModal[id].style.setProperty('display', 'none')
  }

// -----
  home = true;
  han = false;
  ana = false;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}
  showHan() {
    this.home = false;
    this.han = true;
    this.ana = false;
  }
  showAna() {
    this.home = false;
    this.han = false;
    this.ana = true;
  }
  hideAll() {
    this.home = true;
    this.han = false;
    this.ana = false;
  }

}
