import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteService } from '../../app/core/compte.service';
import {Meeting} from './meetingStruct';
import {map,mergeMap} from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*Permet l'affichage des rendez-vous d'un client */

@IonicPage()
@Component({
	selector: 'page-meeting',
	templateUrl: 'meeting.html',
})
export class MeetingPage {

	meetings=new Array<Meeting>();
idEvent:any;
idOperation:any;
typeEvent:any;

constructor(public navCtrl: NavController, public navParams: NavParams,public compteService:CompteService,public alertCtrl: AlertController) {

	let key2='id';

	const id = sessionStorage.getItem(key2);

	this.getMeeting(id).subscribe(meetings=>this.addData(this.meetings));  
}

ionViewDidLoad() {
	console.log('ionViewDidLoad MeetingPage');
}

getMeeting(id :any):Observable<any>{

	return this.compteService.getMettingTab(id).pipe(map(meetings => this.meetings=meetings));

}
addData(meetings:any[]){
	///console.log(commandes.id);
	meetings.forEach(meeting => {

		let cut =meeting.end.split("T");
		meeting.end=cut[0]+" "+cut[1];

		let cut2 =meeting.start.split("T");
		meeting.start=cut2[0]+" "+cut2[1];

	});

	this.meetings=meetings.reverse();



}

openDialog(idEvent:any,idOperation:any,typeEvent:any): void {
	this.idEvent=idEvent;
	this.idOperation=idOperation;
	this.typeEvent=typeEvent;

	let alert = this.alertCtrl.create({
		title: 'Suppression',
		message: 'Voulez-vous supprimer ce rendez-vous ?',
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
	console.log(this.idEvent);
	this.compteService.deleteEvent(this.idEvent.toString()).subscribe(
		res => {
			console.log("Suppresion Event et Operation");
			this.deleteOperation(this.idOperation.toString(),this.typeEvent);



		},
		err => {
			console.log("probleme");			
		})




}



deleteOperation(idOperation:any,typeEvent:any){

	if(typeEvent=="Montage"){
		this.compteService.deleteOperationMontage(idOperation).subscribe();
	}

	else {
		if(typeEvent=="Réparation"){
			this.compteService.deleteOperationReparation(idOperation).subscribe();

		}
		else {
			this.compteService.deleteOperationNettoyage(idOperation).subscribe();
		}
	}

}

loadEvents() {
	let key2='id';

	const id = sessionStorage.getItem(key2);
	this.getMeeting(id).subscribe(meetings=>this.addData(this.meetings)); 
}



}
