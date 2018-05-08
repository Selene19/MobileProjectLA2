import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NettoyagesPage } from './nettoyages';

@NgModule({
  declarations: [
    NettoyagesPage,
  ],
  imports: [
    IonicPageModule.forChild(NettoyagesPage),
  ],
})
export class NettoyagesPageModule {}
