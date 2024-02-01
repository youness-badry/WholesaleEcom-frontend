import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { RemoveSpacesAndDiacriticsPipe } from '../core/pipes/remove-spaces-and-diacritics.pipe';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    RemoveSpacesAndDiacriticsPipe
  ],
  exports: [NavbarComponent],
})
export class SharedModule { }
