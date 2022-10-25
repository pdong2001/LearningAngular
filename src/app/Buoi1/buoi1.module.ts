import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Buoi1RoutingModule } from './buoi1-routing.module';
import { Bai1Component } from './bai1/bai1.component';
import { FormsModule } from '@angular/forms';
import { Bai2Component } from './bai2/bai2.component';
import { Bai6Component } from './bai6/bai6.component';

@NgModule({
  declarations: [
    Bai1Component,
    Bai2Component,
    Bai6Component
  ],
  imports: [
    CommonModule,
    Buoi1RoutingModule,
    FormsModule
  ],
  exports: [
    Bai1Component,
    Bai2Component
  ]
})
export class Buoi1Module { }
