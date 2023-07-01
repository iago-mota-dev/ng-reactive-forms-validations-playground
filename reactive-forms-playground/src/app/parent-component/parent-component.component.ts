import { Component } from '@angular/core';
import { StepOneComponentTemplateComponent } from '../step-one-component-template/step-one-component-template.component';
import { StepTwoComponentTemplateComponent } from '../step-two-component-template/step-two-component-template.component';
import { Step } from '../isteps/step';
import { FormWizComponent } from '../form-wiz/form-wiz.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  steps: Step[] = [
    { component: StepOneComponentTemplateComponent, context: { inputOne: 'Input for Step One' } },
    { component: StepTwoComponentTemplateComponent, context: { inputTwo: 'Input for Step Two' } },
    { component: FormWizComponent, context: { form: 'Input for form dynamic' } },
  ];
}
