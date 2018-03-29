import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserConnexion }    from './userConnexion';
import {map,mergeMap} from "rxjs/operators";

import { Observable } from 'rxjs/Observable';
import { IdentificationService } from '../../app/core/identification.service';
import {ComptePage} from '../compte/compte';


/**
 * Generated class for the IdentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identification',
  templateUrl: 'identification.html',
})
export class IdentificationPage {
	
	userConnexion=new UserConnexion();
accesCompte:any;
connexion:String="";

  constructor(public navCtrl: NavController,public navParams: NavParams,public identificationService:IdentificationService) {
  }


	onSubmit2(value):void{
		this.accesCompte=null;
		console.log(value.email2);
		console.log(value.password2);
		
		this.getIdentificationUser(this.userConnexion).subscribe(
		  accesCompte => {
          this.getId(this.userConnexion.email);
			
			
        },
        err => {
          this.connexion="Mot de passe ou email incorrect ";
			
        });
	}
  
 getIdentificationUser(userConnexion:UserConnexion):Observable <any>{
	 return this.identificationService.getIdentificationUser(this.userConnexion).pipe(
			map(accesCompte => this.accesCompte=accesCompte));
	 
 }
 

 getId(email :any){
	 
	 this.identificationService.getId(email).subscribe( user=> this.redirectToCompte(user));
	 
 }

redirectToCompte(userConnexion:any){
	
	
	this.userConnexion.id=userConnexion.id;
	
	this.userConnexion.role=userConnexion.role;
	this.navCtrl.push(ComptePage,{
      id: this.userConnexion.id});
	//this.loginService.postUser(this.userConnexion);
	
	
	
	
}

ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificationPage');
  }
  

}