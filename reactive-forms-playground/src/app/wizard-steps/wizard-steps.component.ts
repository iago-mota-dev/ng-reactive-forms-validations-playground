import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Step } from '../isteps/step';
@Component({
  selector: 'app-wizard-steps',
  templateUrl: './wizard-steps.component.html',
  styleUrls: ['./wizard-steps.component.css']
})
export class WizardStepsComponent implements OnInit, AfterViewInit, OnDestroy  {
  @Input() steps: Step[] = [];
  currentStep = 0;

  @ViewChild('stepContainer', { read: ViewContainerRef, static: false }) stepContainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadStepComponent();
  }

  ngAfterViewInit() {
    this.loadStepComponent();
  }

  ngOnDestroy() {
    this.stepContainer.clear();
  }

  goToPreviousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.loadStepComponent();
    }
  }

  goToNextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.loadStepComponent();
    }
  }

  private loadStepComponent() {
    this.stepContainer.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.steps[this.currentStep].component);
    const componentRef = this.stepContainer.createComponent(componentFactory);
    const stepComponent = (componentRef.instance as Step).component;
    stepComponent.context = (this.steps[this.currentStep].context as Step).context;
  }
}