import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './custom-directive.directive';
import {MatInputModule} from '@angular/material/input'



@NgModule({
  declarations: [
    BtnComponent,
    InputComponent,
    CustomDirectiveDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    BtnComponent,
    InputComponent,
    CustomDirectiveDirective
  ]
})
export class ShareModule { }
