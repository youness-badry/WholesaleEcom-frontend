import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesAndDiacriticsPipe } from './pipes/remove-spaces-and-diacritics.pipe';



@NgModule({
  declarations: [
    RemoveSpacesAndDiacriticsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RemoveSpacesAndDiacriticsPipe
  ]
})
export class CoreModule { }
