import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { OfficeSelectorComponent } from './office-selector/office-selector.component';


@NgModule({
  declarations: [
    CountrySelectorComponent,
    OfficeSelectorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CountrySelectorComponent,
    OfficeSelectorComponent
  ]
})
export class SharedModule { }
