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
import { CoreModule } from './core/core.module';
import {IdentificationPageModule} from '../pages/identification/identification.module';
import {ComptePageModule} from '../pages/compte/compte.module';

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
	  	IdentificationPageModule,
	  ComptePageModule
	  

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	IdentificationPage,
	  ComptePage
	  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
