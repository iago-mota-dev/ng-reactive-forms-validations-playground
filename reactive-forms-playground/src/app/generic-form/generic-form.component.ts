import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent {
  dynamicPropertyName;
  dynamicProperties = {};
  @Input() id: number;

  constructor(private fb: FormBuilder) {
    this.dynamicPropertyName = "profileForm" + this.id;

    this.dynamicProperties[this.dynamicPropertyName] = this.fb.group({
      username: ['',],
      email: ['',]
    });
  }


finish() {
  console.log(this.dynamicProperties[this.dynamicPropertyName].getRawValue())
}
  
}
