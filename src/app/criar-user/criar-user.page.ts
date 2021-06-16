import { Component, OnInit } from '@angular/core';
import { CriarPage } from '../criar/criar.page';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  template:`<ion-button  color="primary"  [navPush]="criar" style="padding-left:100px">Register</ion-button>`,
  selector: 'app-criar-user',
  templateUrl: './criar-user.page.html',
  styleUrls: ['./criar-user.page.scss'],
})
export class CriarUserPage implements OnInit {
  criar: any;
  constructor(
    private alert : AlertController,
    private afAuth : AngularFireAuth,
    private route : Router,
    private user : UserService
  ) { 
    
    this.criar = CriarPage 
  }

  ngOnInit() {
  }

  async showalert(header : string , message: string){
    const alert = await  this.alert.create({
      header,
      message,
      buttons: [{
        text: 'Re-enviar',
        
        handler: () => {
          this.enviaremaildeverific()
        }
      },{
      text: 'Ja clickei no link',
     
      handler: () => {
       this.javerifiquei()
      }
    },
    {
      text: 'Login em outra conta',
     
      handler: () => {
       this.user.logout()
       this.route.navigate(['./login'])
      }
    }]
    })
    await alert.present() 
  }
  async javerifiquei(){
    const foi = (await this.afAuth.currentUser).emailVerified
    console.log(foi ,"email verified na criar user")
    if (foi){
      this.route.navigate([ './home' ])
    }
  }
   async enviaremaildeverific(){
   (await this.afAuth.currentUser).sendEmailVerification()
    
 
    this.javerifiquei()
  }
}
