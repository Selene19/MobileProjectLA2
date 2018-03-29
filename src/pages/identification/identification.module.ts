import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentificationPage } from './identification';
import { CoreModule } from '../../app/core/core.module';

@NgModule({
  declarations: [
    IdentificationPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentificationPage),
	  CoreModule
  ],
	
})
export class IdentificationPageModule {}
