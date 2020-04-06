import { Component } from '@angular/core';

import { IonicPage, NavController, Platform } from 'ionic-angular';

import { BluetoothLE } from '@ionic-native/bluetooth-le';



@Component({

selector: 'page-contact',

templateUrl: 'contact.html',

providers: [
    Platform,
BluetoothLE

]

})

export class ContactPage {

s = "";




constructor(public navCtrl: NavController,public bluetoothle: BluetoothLE,public plt: Platform) {


}



conectarbluetooth(){
    

this.plt.ready().then((readySource) => {



console.log('Platform ready from', readySource);


this.bluetoothle.initialize().then(ble => {

console.log('ble', ble.status) // logs 'enabled'

this.s = ble.status;

});

});
}
}
