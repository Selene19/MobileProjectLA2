import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewIdentificationPage } from './new-identification';
import { CoreModule } from '../../app/core/core.module';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    NewIdentificationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewIdentificationPage),CoreModule,SharedModule
  ],
})
export class NewIdentificationPageModule {}
