import { Component, OnInit } from '@angular/core';
import { CriarPage } from '../criar/criar.page';
import { AlertController , LoadingController} from '@ionic/angular';
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
  public loading: any
  criar: any;
  constructor(
  
    private alert : AlertController,
    private afAuth : AngularFireAuth,
    private route : Router,
    private user : UserService,
    public loadingC: LoadingController
  ) { 
    
    this.criar = CriarPage 
  }

  ngOnInit() {
  
  }

  home(){
    this.route.navigate(['/home'])
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

  async presentLoading(){
    this.loading = await this.loadingC.create({
       cssClass: 'my-custom-class',
       message: 'Espere um momento...',
       duration: 2000
     });
     await this.loading.present();
    }


  async javerifiquei(){ 
    this.presentLoading()
    const foi = (await this.afAuth.currentUser)
    foi.reload()
    setTimeout(() => {
      console.log("RELOAD")
      var dd = foi.emailVerified
      console.log(dd ,"email verified na criar user")
      if (dd == true){
       
        this.route.navigate([ './home' ])
       
      }
    
    }, 3500);
  }
   
   async enviaremaildeverific(){
   (await this.afAuth.currentUser).sendEmailVerification()
    
 
    this.javerifiquei()
  }
}
