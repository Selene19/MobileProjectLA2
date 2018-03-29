import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User }    from './user';
import {map,mergeMap} from "rxjs/operators";

import { Observable } from 'rxjs/Observable';
import { IdentificationService } from '../../app/core/identification.service';
import {IdentificationPage} from '../identification/identification';

/**
 * Generated class for the NewIdentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-identification',
  templateUrl: 'new-identification.html',
})
export class NewIdentificationPage {
	
	showForm=true;
   
    civilites = [
     'Mme.',
     'Mlle.',
      'M.',
    ];

	validation:String="";
	user=new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,public identificationService:IdentificationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewIdentificationPage');
  }

onSubmit(value):void {
	   
	   this.user.id=null;
	   this.user.civilite=value.civilite;
	   this.user.nom=value.nom;
	   this.user.prenom=value.prenom;
	   this.user.email=value.email;
	   this.user.password=value.password;
	   this.user.confirmPassword=value.confirmPassword;
	   
	   
	   this.identificationService.postUser(this.user).subscribe(
        res => {
          this.validation="Création de votre compte avec succés";
			
			
        },
        err => {
          this.validation="Adresse mail déja utilisée ou erreur survenu";
			
        });
	     
	   this.showForm=false;
	   
   }
goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(IdentificationPage);

}
}
