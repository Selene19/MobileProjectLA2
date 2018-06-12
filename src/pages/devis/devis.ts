import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteService } from '../../app/core/compte.service';
import {map,mergeMap} from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import {DevisStruct} from './devisStruct';


/**
 * Generated class for the DevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html',
})
export class DevisPage {
	
	deviss=new Array<DevisStruct>();

  constructor(public navCtrl: NavController, public navParams: NavParams,public compteService:CompteService) {
	  
	  this.getAllDevis().subscribe(deviss=>this.addData(this.deviss));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevisPage');
  }


getAllDevis(){
		let key2='id';
		const id = sessionStorage.getItem(key2);
		return this.compteService.getAllDevis(id).pipe(map(deviss => this.deviss=deviss));

	}


addData(deviss:any[]){
	this.deviss=deviss.reverse();

}

loadEvents() {
	let key2='id';

	const id = sessionStorage.getItem(key2);
	this.getAllDevis().subscribe(deviss=>this.addData(this.deviss));
}



}
