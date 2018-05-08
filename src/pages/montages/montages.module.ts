import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MontagesPage } from './montages';

@NgModule({
  declarations: [
    MontagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MontagesPage),
  ],
})
export class MontagesPageModule {}
