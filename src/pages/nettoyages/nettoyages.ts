import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IdentificationPage} from '../identification/identification';
import { LoginService } from '../../app/core/login.service';
import {GetMeetingPage} from '../get-meeting/get-meeting';

/**
 * Generated class for the NettoyagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*Page d'informations service de nettoyage */

@IonicPage()
@Component({
	selector: 'page-nettoyages',
	templateUrl: 'nettoyages.html',
})
export class NettoyagesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams,public loginService: LoginService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NettoyagesPage');
	}

	goToOtherPage() {
		//push another page onto the history stack
		//causing the nav controller to animate the new page in
		this.navCtrl.push(IdentificationPage);
	}

	goToOtherPageRD(){
		this.navCtrl.push(GetMeetingPage);
	}

	hiddenConnexion():any{
		return this.loginService.hiddenConnexion();
	}

	hiddenRD():any{
		return this.loginService.hiddenCompte();

	}

}
