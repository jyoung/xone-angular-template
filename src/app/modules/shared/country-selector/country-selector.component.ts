import { Component, Input, Output, forwardRef, OnInit, HostBinding } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Country {
  number: number;
  abbr: string;
  name: string;
}

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrySelectorComponent),
      multi: true
    }
  ]
})
export class CountrySelectorComponent implements OnInit, ControlValueAccessor {

  countryControl = new FormControl('', [Validators.required]);

  countries: Country[] = [
    { number: 1, abbr: 'US', name: 'United States of America' },
    { number: 70, abbr: 'CA', name: 'Canada' }
  ];

  constructor() { }

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() {
    this.countryControl.setValue(this.countries.find(x => x.number === 1));
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
