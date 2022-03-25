import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkilsRoutingModule } from './skils-routing.module';
import { SkilsComponent } from './skils/skils.component';


@NgModule({
  declarations: [
    SkilsComponent
  ],
  imports: [
    CommonModule,
    SkilsRoutingModule
  ]
})
export class SkilsModule { }
