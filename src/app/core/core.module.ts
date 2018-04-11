import { NgModule } from '@angular/core';
import {IdentificationService} from './identification.service';
import {CompteService} from './compte.service';

@NgModule({
  providers: [
    IdentificationService,
	  CompteService
  ]
})
export class CoreModule { }