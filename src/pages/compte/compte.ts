import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetMeetingPage} from '../get-meeting/get-meeting';
import {HomePage} from '../home/home';
import {MeetingPage} from '../meeting/meeting';
import {CommandesPage} from '../commandes/commandes'
import { LoginService } from '../../app/core/login.service';


/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {
	id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginService:LoginService) {
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }
	
	goToHome(){ 
		this.navCtrl.push(HomePage);
	}
	
	deconnexion(){ 
		
		this.loginService.changeAuthentification();
		this.navCtrl.push(HomePage);
	}

}
