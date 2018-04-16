import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetMeetingPage } from './get-meeting';
import { NgCalendarModule  } from 'ionic2-calendar';
import {RendezVous} from './rd';
import {RendezVousPost} from './rdPost';


 

@NgModule({
  declarations: [
    GetMeetingPage
  ],
  imports: [
    IonicPageModule.forChild(GetMeetingPage),
	  NgCalendarModule
	  
	 
  ],
})
export class GetMeetingPageModule {}
