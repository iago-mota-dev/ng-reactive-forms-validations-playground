import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-one',
  template: `
    <h2>Step One</h2>
  `,
  styleUrls: ['./step-one-component-template.component.css']
})
export class StepOneComponentTemplateComponent {
  @Input() context: any;
}
