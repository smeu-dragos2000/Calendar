import { Component, OnInit, Input } from '@angular/core';
// import  galerieAna  from '../../../assets/Data-json/Galerie-Ana.json';

@Component({
  selector: 'app-turism-ana',
  templateUrl: './turism-ana.component.html',
  styleUrls: ['./turism-ana.component.scss']
})
export class TurismAnaComponent implements OnInit {

  displayPachetTuristic = false;

  // @Input() public GalerieAna: { image: string, thumbImage: string}[] = galerieAna;

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth', block: "start"});
  // }

  // showPachetTuristic() {
  //   this.displayPachetTuristic = true;
  // }

  // closePachetTuristic() {
  //   this.displayPachetTuristic = false;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
