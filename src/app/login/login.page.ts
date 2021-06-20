import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from'../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string ="";
    password: string = "";
    emailrecu: string = "";
    abrir: boolean = false;
    temqverificar: boolean = false
  constructor(
    public auth:AngularFireAuth,
    public alertController : AlertController,
    public router: Router ,
    public user :UserService) {
         
    }
   

  ngOnInit() {
  }

async login (){
  const {email , password } = this
  try{
    const res = await this.user.login(email , password)
    if(res.user){
      this.user.setUser( { 
         username: res.user.displayName,
         uid: res.user.uid,
         foto : res.user.photoURL,
      })
      this.showalert('' ,'Login com sucesso' )
      this.router.navigate([ './home' ])
  
    }
  }catch(err){
    if(err.code == "auth/invalid-password" ){
     return this.showalert("Erro" , "Senha errada")
    }
    if(err.code == "auth/user-not-found" ){
   return   this.showalert("Erro" , "Usuario não encontrado.")
    }
    else{
  return   this.showalert(err.code , err.message)
    }
  }
}

abriu(){
  this.abrir = !this.abrir
}
voltar(){
  this.router.navigate(['./criar-user'])
}

enviar(){
  var auth = this.auth;  
  auth.sendPasswordResetEmail(this.emailrecu).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}
async showalert(header : string , message: string){
  const alert = await  this.alertController.create({
    header,
    message,
    buttons: ["Ok"]
  })
  await alert.present() 
}
async emailverificado(){
    var foi = (await this.auth.currentUser).emailVerified
    console.log(foi)
  
 }
 async enviaremaildeverific(){
  (await this.auth.currentUser).sendEmailVerification()
   this.temqverificar = true
   this.emailverificado()
 }

}
//ae
