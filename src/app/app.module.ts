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
import { CoreModule } from './core/core.module';
//import { SharedModule } from './shared/shared.module';
import {IdentificationPageModule} from '../pages/identification/identification.module';
import {ComptePageModule} from '../pages/compte/compte.module';
import {NewIdentificationPageModule} from '../pages/new-identification/new-identification.module';
import {GetMeetingPageModule} from '../pages/get-meeting/get-meeting.module';

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
	  GetMeetingPageModule
	  

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	IdentificationPage,
	ComptePage,
	NewIdentificationPage,
	GetMeetingPage
	  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
