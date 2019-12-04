import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { BluetoothLE } from '@ionic-native/bluetooth-le';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [  
    BluetoothLE,
    
      ]

})
export class FeedPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetoothle: BluetoothLE, public plt: Platform) {
  
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.plt.ready().then((readySource) => {
  
      console.log('Platform ready from', readySource);
   
      this.bluetoothle.initialize().then(ble => {
        console.log('ble', ble.status) // logs 'enabled'
      });
   
     });

    }
  
  ConectarBluetooth(){
    
    console.log('oi');


  }
}
