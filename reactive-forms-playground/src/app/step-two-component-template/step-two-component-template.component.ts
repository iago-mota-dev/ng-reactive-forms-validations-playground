import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-two',
  template: `
    <h2>Step Two</h2>
  `,
})
export class StepTwoComponentTemplateComponent {
  @Input() context: any;
}
