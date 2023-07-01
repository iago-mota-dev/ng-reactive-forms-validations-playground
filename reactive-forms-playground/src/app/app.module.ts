import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { StepOneComponentTemplateComponent } from './step-one-component-template/step-one-component-template.component';
import { StepTwoComponentTemplateComponent } from './step-two-component-template/step-two-component-template.component';
import { FormWizComponent } from './form-wiz/form-wiz.component';
import { GenericFormComponent } from './generic-form/generic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralFormComponent,
    WizardStepsComponent,
    ParentComponentComponent,
    StepOneComponentTemplateComponent,
    StepTwoComponentTemplateComponent,
    FormWizComponent,
    GenericFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
