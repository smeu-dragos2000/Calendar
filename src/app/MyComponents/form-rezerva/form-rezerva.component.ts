import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-rezerva',
  templateUrl: './form-rezerva.component.html',
  styleUrls: ['./form-rezerva.component.scss']
})
export class FormRezervaComponent implements OnInit {

  // rezervaForm = new FormGroup ({
  //   nume : new FormControl('', [Validators.required]),
  //   preNume : new FormControl(''),
  //   email : new FormControl(''),
  //   telefon : new FormControl(''),
  // })

  rezervaForm!: FormGroup;
  submitted = false;
  showForm = true;

constructor (private FormBuilder: FormBuilder) {}



  ngOnInit() {
    this.rezervaForm = this.FormBuilder.group({
      nume: ['', Validators.required],
      preNume: ['', Validators.required],
      email: ['', Validators.required],
      telefon: ['', [Validators.required, Validators.minLength(9)]]
    })
  }



  onSubmit() {
    this.submitted = true;
    if (this.rezervaForm.invalid) {
      return ;
    }
    else {
      this.showForm = false;
      console.log(this.rezervaForm.value);
    }

  }

}
