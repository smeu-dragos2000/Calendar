import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { BusyDayService } from 'src/app/MyService/busy-day.service';

@Component({
  selector: 'app-form-rezerva',
  templateUrl: './form-rezerva.component.html',
  styleUrls: ['./form-rezerva.component.scss']
})
export class FormRezervaComponent implements OnInit {

  public RoomName: string = '';

  rezervaForm!: FormGroup;
  submitted = false;
  showForm = true;

  showAfterForm = false;


constructor (private FormBuilder: FormBuilder, private busyDayService: BusyDayService, private router: Router) {}

  ngOnInit() {
    this.rezervaForm = this.FormBuilder.group({
      lastNameClient: ['', Validators.required],
      firstNameClient: ['', Validators.required],
      countryClient: ['', Validators.required],
      addressClient: ['', Validators.required],
      emailClient: ['', Validators.required],
      phoneClient: ['', [Validators.required, Validators.minLength(9)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.rezervaForm.invalid) {
      return ;
    }
    else {
      this.showForm = false;
      let url = window.location.href
      if(url.indexOf("ana") != -1){
         // suntem pe turism-ana
        this.busyDayService.reservationAna.client = this.rezervaForm.value
        this.busyDayService.addReservationAna()
        this.busyDayService.bookDaysAna()
      }
      else if (url.indexOf("han") != -1) {
        this.busyDayService.reservationHan.client = this.rezervaForm.value
        this.busyDayService.bookDaysHanFamily()
        this.busyDayService.bookDaysHanDouble()
        this.busyDayService.addReservationHan()
      }
    }
    this.showAfterForm = true;
  }

  message() {
    // this.router.navigate(['/'])
    this.reloadPage()
    this.showAfterForm = true;
  }
  reloadPage(){
    window.location.reload()
  }
}


