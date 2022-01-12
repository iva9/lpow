import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription} from 'rxjs';
import firebase from 'firebase/app'
import { ComentUsuario } from'../eventomodal/eventomodal.page';
import * as moment from 'moment'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import 'firebase/firestore'


@Component({
  selector: 'app-evento-pesquisa',
  templateUrl: './evento-pesquisa.page.html',
  styleUrls: ['./evento-pesquisa.page.scss'],
})
export class EventoPesquisaPage implements OnInit {
eventoID;
lugaresdocomentario;
coments;
noAuth = true 
pode : boolean = false
nome
imgus;
numcoments = 0;
jadeuUP : boolean = false
m
private evento : AngularFirestoreCollection
eventodb;
upReference;
todoscoments
iduser 
lugardocomentario
comentario = ""
ComentSet : ComentUsuario ={    
  img : '',
  username : '',
  comentarioU : '',
  UID : ''
}
constructor(
  private alert : AlertController,
  private route : ActivatedRoute ,
   private firestore :  AngularFirestore,
   private Firebase : AngularFireDatabase,
    private auth : AngularFireAuth,
    private router : Router,
    private iab : InAppBrowser,)
 { 
  this.eventoID = this.route.snapshot.paramMap.get('chave')
  this.getevento(this.eventoID)
 }

ngOnInit() { 
  this.auth.onAuthStateChanged((user)=>{
    if (user) {
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/reference/js/firebase.User
     var uid = user.uid;
     console.log( "logado por aqui")
      this.iduser = uid
     // ...
   } else {
    this.iduser == null
     console.log("Deslogado")
     // User is signed out
     // ...
   }
 })
 }

async user(){
  const res = await this.auth.currentUser
  if (res != null){
    this.imgus  = res.photoURL
    this.iduser = res.uid
    this.nome = res.displayName
  } 

}

jaUpou(){
  if (this.iduser == null){
    this.showAlertLogin()
  }
  if(this.eventodb.up.includes(this.iduser)){
    this.jadeuUP = true
  }
}
redirectUser(){
  this.router.navigate(['/usuario-pesquisa/' + this.eventodb.userID[0]])
}
getevento(tt){
  //refazer

  this.evento = this.firestore.collection('eventos', ref => ref.where('chave2','==',`${tt}`)) // Firestore evento
  return this.evento.get().subscribe(coisas => {
    coisas.forEach(b => {
      const data = b.data()
      const id = b.id
      moment.locale('pt-BR')
      this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
      data.dia = this.m
      this.eventodb = { id,... data}
      this.getComent(this.eventodb.id)
      this.lugardocomentario =this.Firebase.list(`coments/${this.eventodb.id}`, ref => ref.limitToLast(75));
      console.log(this.eventodb)
      this.pode = true
    }
    )
  }
  )
}
redirectlink(){
 const browser =  this.iab.create(`${this.eventodb.ingresso}`,'_system',{location :'no'})

browser.on('loadstop').subscribe(event => {
   browser.insertCSS({ code: "body{color: red;" });
});

browser.close();
}
redirectmap(){
 const map = this.iab.create(`https://www.google.com/maps/search/?api=1&query=${this.eventodb.local.description}`,'_system')
 
 map.on('loadstop').subscribe(event => {
  map.insertCSS({ code: "body{color: red;" });
 });
 
 map.close();
}
async setcoment(){
  this.user()
  const res =await this.auth.currentUser
  this.ComentSet ={
    img : this.imgus,
    username : this.nome,
    comentarioU : this.comentario,
    UID : this.iduser
  }
  this.lugardocomentario.push(this.ComentSet)
  this.comentario = ""
}
getComent(x){
  this.lugaresdocomentario =this.Firebase.list(`coments/${x}`, ref => ref.limitToLast(75));
  console.log(x)
  this.lugaresdocomentario.valueChanges().subscribe(
    data =>{
      this.trataDados(data)
    }) 
  }
  trataDados(dados){
  this.coments = Object.keys(dados).map(i => dados[i])
  this.numcoments = this.coments.length
  this.todoscoments = this.coments
  }
  page(kdcoment){
    this.router.navigate(['/usuario-pesquisa/' + kdcoment.UID])
     
   }

   async showAlertLogin() {
    const alert = await this.alert.create({
      header: 'Ops!',
      message: 'Crie ou entre em uma conta para usar ups e comentários.',
      buttons: [
        {
          text: 'Criar / Entrar',
         
          handler: ()  => {
           this.router.navigate(['/criar-user'])
       
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
  }
  


    async  UP(){
      this.jadeuUP = true
      const res = await this.auth.currentUser
      if(this.eventodb.up.includes(this.iduser)){
        return this.showalert("Ops!", "Você ja deu UP nesse evento")
        
      }
      else{
      this.upReference  = this.firestore.doc(`eventos/${this.eventodb.id}`)
      this.upReference.update( {
        up : firebase.firestore.FieldValue.arrayUnion(res.uid),
        UPnum: firebase.firestore.FieldValue.increment(1)
      })
      this.eventodb.UPnum +=  1
    }
     } 
     async showalert(header : string , message: string){
      const alert = await  this.alert.create({
        header,
        message,
        buttons: ["Ok"]
      })
      await alert.present() 
    }
    Compartilhar(){
      this.router.navigate(['/share/' + this.eventodb.chave2])
     }
}
