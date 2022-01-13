import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  UIDatual 
  constructor(
    private home : HomePage,
    private platform: Platform,
    private Auth : AngularFireAuth,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastController: ToastController,
    public network  : Network,
  ) {
    this.initializeApp();
    this.network.onDisconnect().subscribe(() =>{
      this.presentToast()
    })

    this.Auth.onAuthStateChanged((user)=>{
      if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/firebase.User
       var uid = user.uid;
       console.log( "logado por aqui")
       this.home.AuthstateLogado(user)
       // ...
     } else {
       this.home.AuthstateDeslogado()
       console.log("Deslogado")
       // User is signed out
       // ...
     }
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
