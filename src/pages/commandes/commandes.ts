import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteService } from '../../app/core/compte.service';
import {map} from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import {Commande} from './commande';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/* Permet d'afficher la liste des commandes et de les supprimer */

@IonicPage()
@Component({
	selector: 'page-commandes',
	templateUrl: 'commandes.html',
})
export class CommandesPage {

	commandes=new Array<Commande>();
	id:any

constructor(public navCtrl: NavController, public navParams: NavParams,public compteService:CompteService,public alertCtrl: AlertController) {

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

openDialog(id:any): void {
	this.id=id;
	

	let alert = this.alertCtrl.create({
		title: 'Suppression',
		message: 'Voulez-vous supprimer cette commande ?',
		buttons: [
			{
				text: 'Annuler',
				role: 'cancel',
				handler: () => {
					console.log('Annuler');

				}
			},
			{
				text: 'Confirmer',
				handler: () => {
					console.log('Confirmer');
					this.confirm();
				}
			}
		]
	});
	alert.present();


}

confirm(){
	this.compteService.deleteCommande(this.id.toString()).subscribe();
	
	
}


loadEvents() {
	let key2='id';

	const id = sessionStorage.getItem(key2);
	this.getCommandes(id).subscribe(commandes=>this.addData(this.commandes));  
}
}
