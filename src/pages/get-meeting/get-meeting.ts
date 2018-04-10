import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetMeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-meeting',
  templateUrl: 'get-meeting.html',
})
export class GetMeetingPage {
	id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetMeetingPage');
  }

}
