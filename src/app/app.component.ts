import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastController: ToastController,
    public network  : Network,
  ) {
    this.initializeApp();
    this.network.onDisconnect().subscribe(() =>{
      this.presentToast()
    })
  }

  initializeApp() {
    this.platform.ready()
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    };

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Sem conexão com a Internet',
        duration: 2000
      });
      toast.present();
    }
  
  
}
