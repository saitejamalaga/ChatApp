import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { FirstCharComponent } from './first-char/first-char.component';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserDetailsComponent, FirstCharComponent,RemoveSpecialCharPipe],
  exports: [
    UserDetailsComponent,
    FirstCharComponent,
    RemoveSpecialCharPipe,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule { }
