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
imgus;
numcoments = 0;
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
  console.log(this.eventoID, 'ali')
  this.getevento().subscribe(data => {
    this.eventodb = data;
    moment.locale('pt-BR')
    this.m = moment(this.eventodb[0].dia).format('ddd DD MMM  - HH:mm')
    this.eventodb[0].dia = this.m
    this.getComent(this.eventodb[0].id)
    this.lugardocomentario =this.Firebase.database.ref(`coments/${this.eventodb[0].id}`)
    this.user()
  })
}

ngOnInit() { 

 }

async user(){
  const res =await this.auth.currentUser
  this.imgus  = res.photoURL
  this.iduser = res.uid
}
redirectUser(){
  this.router.navigate(['/usuario-pesquisa/' + this.eventodb[0].userID[1]])
}
getevento(){
  this.evento = this.firestore.collection('eventos', ref => ref.where('chave2','==',`${this.eventoID}`)) // Firestore evento
  return this.evento.snapshotChanges().pipe(
    map(actions => {
      return actions.map(b => {
        const data = b.payload.doc.data();
      
        return {  ...data };
      });
    })
  );
}
redirectlink(){
 const browser =  this.iab.create(`https://${this.eventodb[0].ingresso}`,'_system',{location :'no'})

browser.on('loadstop').subscribe(event => {
   browser.insertCSS({ code: "body{color: red;" });
});

browser.close();
}
redirectmap(){
 const map = this.iab.create(`https://www.google.com/maps/search/?api=1&query=${this.eventodb[0].local.description}`,'_system')
 
 map.on('loadstop').subscribe(event => {
  map.insertCSS({ code: "body{color: red;" });
 });
 
 map.close();
}
async setcoment(){
  const res =await this.auth.currentUser
  this.ComentSet ={
    img : res.photoURL,
    username : res.displayName,
    comentarioU : this.comentario,
    UID : this.iduser
  }
  this.lugardocomentario.push(this.ComentSet)
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

    async  UP(){
      const res = await this.auth.currentUser
      if(this.eventodb[0].up.includes(this.iduser)){
        return this.showalert("Ops!", "Você ja deu UP nesse evento")
        
      }
      this.upReference  = this.firestore.doc(`eventos/${this.eventodb[0].id}`)
      this.upReference.update( {
        up : firebase.firestore.FieldValue.arrayUnion(res.uid),
        UPnum: firebase.firestore.FieldValue.increment(1)
      })
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
      this.router.navigate(['/share/' + this.eventodb[0].chave2])
     }
}
