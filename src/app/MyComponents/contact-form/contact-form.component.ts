import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  showAfterForm = false;

  constructor (private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.FormBuilder.group({
      nameContact: ['', Validators.required],
      emailContact: ['', [Validators.required, Validators.email]],
      phoneContact: [''],
      subjectContact: ['', Validators.required],
      messageContact: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return ;
    }
    else {
      this.submitted = true;
      this.showAfterForm = true;
    }

  }
  closeAfterForm() {
    this.showAfterForm = false;
    this.reloadPage()
  }
  reloadPage(){
    window.location.reload()
  }

}
