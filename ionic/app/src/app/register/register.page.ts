import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string  =""
  password: string  =""
  cpassword: string =""

  constructor(
    public alert: AlertController,
    public afAuth: AngularFireAuth,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }
  async presentAlert(title: string, content:string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']

    })
    await alert.present()
  }

  async register() {
		const { username, password, cpassword } = this
		if(password !== cpassword) {
      this.showAlert("Erro!","A senhas devem ser a mesma.")
			return console.error("Passwords don't match")
		}

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)
     
      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })
      
				this.user.setUser({
					username,
					uid: res.user.uid
			})
     
      this.presentAlert('Sucesso','Você está registrado')
      this.router.navigate(['/tabs'])
     
      console.log(res)
      this.showAlert("Sucesso","Bem vindo")
      this.router.navigate(['/tabs'])
    } catch(error) {
      console.dir(error)
      this.showAlert("Erro",error.message)
    }
    
  }
   async showAlert(header : string, message : string,){
    const alert = await this.alert.create({
      header,
      message,
      buttons:["OK"]})
   await alert.present()  }
}
