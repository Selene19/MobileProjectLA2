import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IdentificationPage} from '../identification/identification';
import { LoginService } from '../../app/core/login.service';
import {GetMeetingPage} from '../get-meeting/get-meeting';
/**
 * Generated class for the ReparationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reparations',
  templateUrl: 'reparations.html',
})
export class ReparationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReparationsPage');
  }

	
	goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(IdentificationPage);
  }
	
	goToOtherPageRD(){
		this.navCtrl.push(GetMeetingPage);
	}
	
	hiddenConnexion(){
		return this.loginService.hiddenConnexion();
	}
	
	hiddenRD(){
		return this.loginService.hiddenCompte();
		
	}

}
