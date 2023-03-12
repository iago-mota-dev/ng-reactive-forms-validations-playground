import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
})
export class GeneralFormComponent {
  constructor(private fb: FormBuilder) { 
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    this.maxDate = this.formatDate(today);
    this.minDate = this.formatDate(oneYearAgo);
  }

  public minDate: string;
  public maxDate: string;

  profileForm = this.fb.group({
    username: ['', [Validators.required,
    Validators.maxLength(200),
    Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')
    ]],
    email: ['', [Validators.required,
    Validators.maxLength(200),
    Validators.pattern('^[^\\s]*$'),
    Validators.email
    ]],
    id: [null, [Validators.required,
    Validators.pattern('^[0-9]*$'),
    Validators.maxLength(11),
    Validators.min(1)]],
    date: [null, [Validators.required, this.noFutureDateValidator(), this.noToPastDateValidator()]]
  });

  finish() {
    alert("Try filling the input fields with numbers, empty spaces and invalid emails!");
  }

  formatDate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${yyyy}-${mm}-${dd}`;
  }

  noFutureDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const today = new Date();
      if (selectedDate > today) {
        return { 'noFutureDate': true };
      }
      return null;
    };
  
  }
  noToPastDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const today = new Date();
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
      if (selectedDate < oneYearAgo) {
        return { 'noPastDate': true };
      }
      return null;
    };
  
  }
}
