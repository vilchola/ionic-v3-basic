import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';
import { LugaresService } from '../../services/lugares.services';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  nombreLugar: string = '';
  lugar: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService: LugaresService) {
    this.nombreLugar = navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateToThird() {
    this.navCtrl.push(TerceraPage);
  }

  guardarLugar() {
    this.lugar.id = Date.now();
    this.lugaresService.createLugar(this.lugar);
    console.log(this.lugar);
  }

}
