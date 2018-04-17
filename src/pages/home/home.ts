import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {IdentificationPage} from '../identification/identification';
import {ComptePage} from '../compte/compte';
import { LoginService } from '../../app/core/login.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public loginService : LoginService) {

  }
	goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(IdentificationPage);
  }
	
	goToOtherPageCompte(){
		this.navCtrl.push(ComptePage);
	}
	
	hiddenConnexion(){
		return this.loginService.hiddenConnexion();
	}
	
	hiddenCompte(){
		return this.loginService.hiddenCompte();
		
	}

}
