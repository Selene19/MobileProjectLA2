import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteService } from '../../app/core/compte.service';
import {map,mergeMap} from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import {Commande} from './commande';

/**
 * Generated class for the CommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commandes',
  templateUrl: 'commandes.html',
})
export class CommandesPage {
	
	commandes=new Array<Commande>();

  constructor(public navCtrl: NavController, public navParams: NavParams,public compteService:CompteService) {
	  
	  let key2='id';
	  
	   const id=sessionStorage.getItem(key2);

	  this.getCommandes(id).subscribe(commandes=>this.addData(this.commandes));  
	  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandesPage');
  }

	
	getCommandes(id :any):Observable<any>{
		
	return this.compteService.getCommandes(id).pipe(map(commandes => this.commandes=commandes));
		
	}
	addData(commandes:any[]){
		///console.log(commandes.id);
		
		 this.commandes=commandes.reverse();
	  
	  
	  
	}
}
