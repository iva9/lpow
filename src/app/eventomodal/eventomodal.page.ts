import { Component, OnInit, Query,ViewChild } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as moment from 'moment'
import firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-eventomodal',
  templateUrl: './eventomodal.page.html',
  styleUrls: ['./eventomodal.page.scss'],
})
export class EventomodalPage implements OnInit {
  @ViewChild(IonContent ,  { static: true }) content: IonContent;
  x : any;
  verdade : boolean = false
  m;
  UPnum = 0;
  num  = 30
  updateReference;
  denunciaReference;
  nome; 
  jadeuUP : boolean = true
  numcoments = 0;
  newlocal;
  dado : Array<object> = []
  lugardocomentario;
  comentario : string = ""
   coments;
   description:boolean = false
   iduser
   userIDCOMENT
   numTimesLeft = 2;
  todoscoments
  lugaresdocomentario
  lugardocomentario2
  ComentSet : ComentUsuario ={    
    img : '',
    username : '',
    comentarioU : '',
    UID :''
  }
  eventoid;

  
  constructor( 
    private alert : AlertController,
    private router : Router,
    private navparams : NavParams ,
    private modal : ModalController ,
    private Firebase : AngularFireDatabase,
    private auth : AngularFireAuth ,
    private firestore: AngularFirestore,
    private iab: InAppBrowser,
    ) { 
    }
  async ngOnInit() {
    const res  = await this.auth.currentUser
     this.x = this.navparams.get('customid')
     this.lugardocomentario = this.Firebase.database.ref(`coments/${this.x.id}`)
     this.iduser = res.uid
     this.getComent()
     this.UPnum = this.x.UPnum
     if(this.x.local){
       this.description = true
     }

  }
criandomodal(evento){
  this.x = evento
  moment.locale('pt-BR')
  this.m = moment(this.x.dia).format('ddd DD MMM')
  console.log(this.m)
  this.eventoid = evento.id
}
async setcoment(){
  const res =await this.auth.currentUser
  if(this.comentario != null && !this.comentario.trim()){
    this.showalert("Erro" , "Digite um comentario")
  }
  else{
  this.ComentSet ={
    img : res.photoURL,
    username : res.displayName,
    comentarioU : this.comentario,
    UID : this.iduser
  }
  this.lugardocomentario.push(this.ComentSet)
}
}



getComent(){
  this.lugaresdocomentario = this.Firebase.list(`coments/${this.x.id}`, ref => ref.limitToFirst(this.num));
this.lugaresdocomentario.valueChanges().subscribe(
  data =>{
    this.trataDados(data)
  }) 
}
async  UP(){
  this.jadeuUP = true
  const res = await this.auth.currentUser
  if(this.x.up.includes(this.iduser)){
    return this.showalert("Ops!", "Você ja deu UP nesse evento")
    
  }
  
    this.updateReference  = this.firestore.doc(`eventos/${this.x.id}`)
    this.updateReference.update( {
      up : firebase.firestore.FieldValue.arrayUnion(res.uid),
      UPnum: firebase.firestore.FieldValue.increment(1)
    })
    this.x.UPnum +=  1
  }
 
  jaUpou(){
    if(this.x.up.includes(this.iduser)){
      this.jadeuUP = true
    }
  }
   
  
redirectmap(){
  this.iab.create(`https://www.google.com/maps/search/?api=1&query=${this.x.local.description}`,'_system')
}

redirectlink(){
 this.iab.create(`https://${this.x.ingresso}` ,'_system')
}
redirectUser(){
  this.close()
  this.router.navigate(['/usuario-pesquisa/' + this.x.userID[0]])
}
async showalert(header : string , message: string){
  const alert = await  this.alert.create({
    header,
    message,
    buttons: ["Ok"]
  })
  await alert.present() 
}
trataDados(dados){
this.coments = Object.keys(dados).map(i => dados[i]).reverse()
this.numcoments = this.coments.length
this.todoscoments = this.coments
console.log(this.todoscoments,'foi')
}

loadcoments(event){
  this.num = this.num + 60
  this.numTimesLeft -= 1;

  this.getComent()
  this.content.scrollToBottom()
  event.target.complete();
}
page(kdcoment){
  this. userIDCOMENT = kdcoment.UID
  this.close()
  this.router.navigate(['/usuario-pesquisa/' + this. userIDCOMENT])  
 }

 close(){
   this.modal.dismiss();
 }
 Compartilhar(){
  
  this.router.navigate(['/share/' + this.x.chave2])
  this.close()
 }
}
export interface ComentUsuario{
  img : string,
  username : string,
  comentarioU : string
  UID: any
}
