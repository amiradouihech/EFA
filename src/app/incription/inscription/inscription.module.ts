import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
