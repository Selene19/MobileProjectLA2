import { NgModule } from '@angular/core';
import {IdentificationService} from './identification.service';
import {CompteService} from './compte.service';
import  {LoginService} from './login.service';

@NgModule({
  providers: [
    IdentificationService,
	  CompteService,
	  LoginService
  ]
})
export class CoreModule { }