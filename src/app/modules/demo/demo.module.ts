import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { SharedModule } from '../shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { FlexboxComponent } from './views/flexbox/flexbox.component';
import { SelectorsComponent } from './views/selectors/selectors.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent, SelectorsComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
