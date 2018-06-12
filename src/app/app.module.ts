import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IdentificationPage } from '../pages/identification/identification';
import { ComptePage } from '../pages/compte/compte';
import { NewIdentificationPage } from '../pages/new-identification/new-identification';
import {GetMeetingPage} from '../pages/get-meeting/get-meeting';
import {MeetingPage} from '../pages/meeting/meeting';
import {CommandesPage} from '../pages/commandes/commandes';
import  {OperationsPage} from '../pages/operations/operations'
import {MontagesPage} from '../pages/montages/montages';
import {ReparationsPage} from '../pages/reparations/reparations';
import {NettoyagesPage} from '../pages/nettoyages/nettoyages';
import {DevisPage} from '../pages/devis/devis';
import { CoreModule } from './core/core.module';
//import { SharedModule } from './shared/shared.module';
import {IdentificationPageModule} from '../pages/identification/identification.module';
import {ComptePageModule} from '../pages/compte/compte.module';
import {NewIdentificationPageModule} from '../pages/new-identification/new-identification.module';
import {GetMeetingPageModule} from '../pages/get-meeting/get-meeting.module';
import {MeetingPageModule} from '../pages/meeting/meeting.module';
import {CommandesPageModule} from '../pages/commandes/commandes.module';
import {OperationsPageModule} from '../pages/operations/operations.module';
import {MontagesPageModule} from '../pages/montages/montages.module';
import {ReparationsPageModule} from '../pages/reparations/reparations.module';
import {NettoyagesPageModule} from '../pages/nettoyages/nettoyages.module';
import {DevisPageModule} from '../pages/devis/devis.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	  HttpClientModule,
	  CoreModule,
	  //SharedModule,
	  	IdentificationPageModule,
	  ComptePageModule,
	  NewIdentificationPageModule,
	  GetMeetingPageModule,
	  MeetingPageModule,
	  CommandesPageModule,
	  OperationsPageModule,
	  MontagesPageModule,
	  ReparationsPageModule,
	  NettoyagesPageModule,
	  DevisPageModule
	  

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	IdentificationPage,
	ComptePage,
	NewIdentificationPage,
	GetMeetingPage,
	MeetingPage,
	CommandesPage,
	 OperationsPage,
	  MontagesPage,
	  ReparationsPage,
	  NettoyagesPage,
	  DevisPage
	  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
