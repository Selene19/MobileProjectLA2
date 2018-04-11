import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetMeetingPage} from '../get-meeting/get-meeting';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	   this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }

}
