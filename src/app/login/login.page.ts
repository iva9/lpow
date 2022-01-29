import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from'../user.service';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from "firebase"
import { auth } from "firebase"

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
    loading : any;

  constructor(
    public afauth:AngularFireAuth,
    public alertController : AlertController,
    public router: Router ,
    public loadingC: LoadingController,
    public user :UserService,
    private google : GooglePlus,
    private firestore: AngularFirestore,
    public afdatabase: AngularFireDatabase,) {
         
    }
   

  ngOnInit() {
  }

  async presentLoading(){
    this.loading = await this.loadingC.create({
       cssClass: 'my-custom-class',
       message: 'Espere um momento...',
       
     });
     await this.loading.present();
   }  

async login (){
  this.presentLoading()
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
      this.email ="";
      this.password = "";
  
    }
  }catch(err){
    if(err.code == "auth/invalid-password" ){
      this.loadingC.dismiss()
     return this.showalert("Erro" , "Senha errada")
    }
    if(err.code == "auth/user-not-found" ){
      this.loadingC.dismiss()
   return   this.showalert("Erro" , "Usuario não encontrado.")
    }
    else{
      this.loadingC.dismiss()
  return   this.showalert(err.code , err.message)
    }
  }
  this.loadingC.dismiss()
}

abriu(){
  this.abrir = !this.abrir
}
voltar(){
  this.router.navigate(['./criar-user'])
}

enviar(){
  var auth = this.afauth;  
  auth.sendPasswordResetEmail(this.emailrecu).catch(error =>{
   return this.showalert("Erro" , error)
  })
  this.showalert("Email enviado!" , "cheque lixo/spam")
  
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
    var foi = (await this.afauth.currentUser).emailVerified
    console.log(foi)
  
 }
 async enviaremaildeverific(){
  (await this.afauth.currentUser).sendEmailVerification()
   this.temqverificar = true
   this.emailverificado()
 }

 loginGooglecom(){

this.LoginGoogle().then(() =>{
  //const res =  this.Afauth.currentUser
  this.presentLoading()
  this.mostraale()
}).catch(err =>{
  this.showalert("erro" , err)
})

}

   LoginGoogle() {
     return this.google.login({}).then(result =>{
       const user_data_google = result
      return   this.afauth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accesToken))
     })
    

}

async mostraale(){
 const res = await this.afauth.currentUser 
 this.firestore.collection('users', ref => ref.where('iduser', '==', `${res.uid}`)).snapshotChanges().subscribe(usergg => {
   if (usergg.length > 0){
    this.loadingC.dismiss()
    this.router.navigate(['/home'])
    this.showalert('' ,'Login com sucesso' )
   }
   else{
    var username = "Usuario"
    var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18"
    var iduser = res.uid
    //display name ja existe
     this.firestore.collection("users").doc(`${res.uid}`).set({
     username , iduser ,imgUser
    })
    this.afdatabase.database.ref(`users/${res.uid}/username`).set({
    username , iduser , imgUser
     })
  
     this.router.navigate(['/home'])
     this.loadingC.dismiss()

   }
 })
}

}
//ae
