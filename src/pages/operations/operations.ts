import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MontagesPage} from '../montages/montages';
import {ReparationsPage} from '../reparations/reparations' ;
import {NettoyagesPage} from '../nettoyages/nettoyages';

/**
 * Generated class for the OperationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html',
})
export class OperationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationsPage');
  }

}
